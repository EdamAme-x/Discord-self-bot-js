import { DiscordClient, MessageDto } from '@/disgate.js';
import { sendText } from './functions/sendText.ts';
import { replyText } from './functions/replyText.ts';
import { CommandRouter } from './commandRouter.ts';
import { CONST } from './config.ts';

const client = new DiscordClient(CONST.token);

const Router = new CommandRouter([
    {
        name: '$test',
        type: 'command',
        permission: 'everyone',
        execute: (message: MessageDto) => {
            sendText('[!] TEST PASSED 🔥', message);
        },
    },
    {
        name: '$test2',
        type: 'command',
        permission: 'everyone',
        execute: (message: MessageDto) => {
            replyText('[!] TEST PASSED 🔥', message);
        },
    },
    {
        name: '$js',
        type: 'prefix',
        permission: 'self',
        execute: (message: MessageDto) => {
            if (!message.content.includes('```ts')) {
                sendText('[!] Code is doko.', message);
                return;
            }

            let code: string | string[] = message.content.split('```ts').reverse();
            code.pop();
            code = code.reverse().join('```ts').split('```');
            code.pop();
            code = 'var Deno = {};var import = () => 0;' + code.reverse().join('```');
            const safeWorker = new Worker(new URL('./functions/worker.ts', import.meta.url), {
                type: 'module',
                deno: {
                    permissions: "none",
                    // @ts-ignore NOTE: UNSTABLE
                    namespace: false,
                },
            });

            safeWorker.postMessage({
                code: code,
            });

            safeWorker.onmessage = ({ data }) => {
                const result = data.result;
                replyText(result, message);
            };
        },
    },
    {
        name: '$help',
        type: 'command',
        permission: 'everyone',
        execute: (message: MessageDto) => {
            sendText(
                `[!] HELP \n ${Router.commands.map((command) => `${command.name}: [${command.permission}]`).join('\n')}`,
                message,
            );
        }
    }
]);

client.on('messageCreate', (message: MessageDto) => {
    Router.router(message);
});

client.connect();

Deno.serve(() => {
    return new Response('WebSocket Only');
});
