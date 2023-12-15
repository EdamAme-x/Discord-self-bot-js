import {
    DiscordClient,
    MessageDto
} from 'npm:discord-gateways';
import { sendText } from './sendText.ts';

const client = new DiscordClient(Deno.env.get("token") ?? "");

client.on("messageCreate", (message: MessageDto) => {
    const content = message.content;

    if (content.startsWith("$test")) {
        sendText("[!] TEST PASSED 🔥", message)
    }
});

client.connect();

Deno.serve(() => {
    return new Response("WebSocket Only")
})
