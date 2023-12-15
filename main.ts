import { DiscordClient, MessageDto } from 'discord-gateways';

const client = new DiscordClient(Deno.env.get("token") ?? "");

client.on("messageCreate", (message: MessageDto) => {
    console.log(message);
});

client.connect();

Deno.serve(() => {
  return new Response("WebSocket Only")
})
