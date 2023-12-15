import { WebSocket } from 'npm:ws';
import { EventEmitter } from 'npm:events';

export declare interface DiscordClient {
    on(event: 'messageCreate', listener: (message: any) => void): this;
}

export class DiscordClient extends EventEmitter {
    private discordToken: string;
    private seq: number | null;
    private session_id: string | null;
    private ack: boolean;
    private heartbeatTimer: NodeJS.Timer | undefined;
    private ws: WebSocket;

    constructor(discordToken: string) {
        super();
        this.discordToken = discordToken;
        this.seq = null;
        this.session_id = null;
        this.ack = false;
        this.ws = new WebSocket('wss://gateway.discord.gg/?encoding=json&v=9');
    }

    public connect() {
        this.ws = new WebSocket('wss://gateway.discord.gg/?encoding=json&v=9');

        this.ws.on('message', (data: string) => {
            const payload = JSON.parse(data);
            const { op, d, s, t } = payload;

            this.seq = s ? s : this.seq;

            console.log(payload);
        })
    }

    private heartbeat() {
        this.ws.send(JSON.stringify({
            'op': 1,
            'd': this.seq
        }));
        this.ack = false;

        setTimeout(() => {
            if (!this.ack) {
                this.ws.close();
                this.ack = false;
                if (this.heartbeatTimer) {
                    clearInterval(this.heartbeatTimer);
                }
                this.connect();
            }
        }, 5000);
    }

    private identify() {
        this.ws.send(JSON.stringify({
            'op': 2,
            'd': {
                'token': this.discordToken,
                'properties': {
                    '$os': 'linux',
                    '$browser': 'chrome',
                    '$device': 'chrome'
                }
            }
        }));
    }
}

new DiscordClient(Deno.env.get("AccountToken"))

Deno.serve(() => {
  return new Response("WebSocket Only")
})
