# discord-gateways

# About
discord-gateways is a module that connects to Discord Gateways over Websockets and emits events on each [Discord Intent](https://discord.com/developers/docs/topics/gateway#list-of-intents).

## Supported Discord Intents
- MESSAGE_CREATE

# Installation
`npm install discord-gateways`

# How to get your Discord authentication token
1. [Login](https://discord.com/) to your Discord account from your browser.
2. Enable `Developer Tools` using [Ctrl]+[Shift]+[I] key combination on Google Chrome.
3. Go to `Network` tab.
4. Send a message to anyone.
5. Select the `messages` packet, make sure that `Headers` tab is selected, and scroll down to find and copy the `authorization` header under the `Request Headers`.
![alt text](https://github.com/gsoultos/discord-gateways/blob/master/assets/discord_token_instructions.png)

# Usage
```
import { DiscordClient, MessageDto } from 'discord-gateways';

const client = new DiscordClient("DISCORD_TOKEN");

client.on("messageCreate", (message: MessageDto) => {
    console.log(message);
});

client.connect();
```

# Contributing
Please [read the contribution](https://github.com/gsoultos/discord-gateways/blob/master/CONTRIBUTING.md) guide before submit a PR.