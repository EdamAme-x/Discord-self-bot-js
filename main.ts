import { DiscordClient, MessageDto } from '.,/disgate.js';
import { sendText } from './sendText.ts';
import { CommandRouter } from './commandRouter.ts';

const client = new DiscordClient(Deno.env.get('token') ?? '');

const Router = new CommandRouter([
    {
        name: '$test',
        type: 'command',
        execute: (message: MessageDto) => {
            sendText('[!] TEST PASSED 🔥', message);
        },
    },
]);

client.on('messageCreate', (message: MessageDto) => {
    Router.router(message);
});

client.connect();

Deno.serve(() => {
    return new Response('WebSocket Only');
});
