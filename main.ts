import {
    DiscordClient,
    MessageDto
} from 'npm:discord-gateways';

const client = new DiscordClient(Deno.env.get("token") ?? "");

client.on("messageCreate", (message: MessageDto) => {
    message = JSON.parse(message)
    const content = message.content;

    if (content.startsWith("$test")) {
        fetch("https://discord.com/api/v9/channels/" + message.channel_id + "/messages", {
            "headers": {
                "accept": "*/*",
                "accept-language": "ja,en-US;q=0.9,en;q=0.8",
                "authorization": Deno.env.get("token"),
                "content-type": "application/json",
                "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-debug-options": "bugReporterEnabled",
                "x-discord-locale": "ja",
                "x-discord-timezone": "Asia/Tokyo"
            },
            "referrer": `https://discord.com/channels/${message.channel_id}/${message.id}`,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"mobile_network_type\":\"unknown\",\"content\":\"[TEST] PASSED!\",\"tts\":false,\"flags\":0}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
    }
});

client.connect();

Deno.serve(() => {
    return new Response("WebSocket Only")
})
