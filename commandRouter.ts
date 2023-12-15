import { MessageDto } from '../disgate.js';

export type Command = {
    name: string;
    type: 'prefix' | 'command';
    execute: (message: MessageDto) => void;
};

export class CommandRouter {
    constructor(
        private commands: Command[],
    ) {}

    router(message: MessageDto) {
        for (const command of this.commands) {
            if (command.type === 'prefix') {
                if (message.content.startsWith(command.name)) {
                    command.execute(message);
                }
            } else {
                if (message.content === command.name) {
                    command.execute(message);
                }
            }
        }
    }
}
