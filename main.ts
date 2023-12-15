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
            const content = message.content;
            const codeStartIndex = content.indexOf('```ts');

            if (codeStartIndex === -1) {
                sendText('[!] Code is doko.', message);
                return;
            }

            const codeEndIndex = content.indexOf('```', codeStartIndex + 5);
            const code = content.substring(codeStartIndex + 5, codeEndIndex);
            const safeWorker = new Worker(new URL('./functions/worker.ts', import.meta.url), {
                type: 'module',
                deno: {
                    permissions: {
                        'read': false,
                        'env': false,
                        'write': false,
                        'net': false,
                        'run': false,
                    },
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
]);

client.on('messageCreate', (message: MessageDto) => {
    Router.router(message);
});

client.connect();

Deno.serve(() => {
    return new Response('WebSocket Only');
});
