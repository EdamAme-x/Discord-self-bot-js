import { MessageDto } from "../disgate.js";

export async function replyText(
  text: string,
  message: MessageDto
): Promise<boolean> {

  const response = await fetch(
    "https://discord.com/api/v9/channels/" + message.channel_id + "/messages",
    {
      headers: {
        accept: "*/*",
        "accept-language": "ja,en-US;q=0.9,en;q=0.8",
        authorization: Deno.env.get("token") ?? "",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-debug-options": "bugReporterEnabled",
        "x-discord-locale": "ja",
        "x-discord-timezone": "Asia/Tokyo",
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify({
        mobile_network_type: "unknown",
        content: text,
        tts: false,
        message_reference: {
          guild_id: message.guild_id,
          channel_id: message.channel_id,
          message_id: message.id,
        },
        allowed_mentions: {
          parse: ["users", "roles", "everyone"],
          replied_user: false,
        },
        flags: 0,
      }),
      method: "POST",
      mode: "cors",
      credentials: "include",
    }
  );

  if (!response.ok) {
    return false;
  }

  return true;
}
