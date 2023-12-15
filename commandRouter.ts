import { MessageDto } from '../disgate.js';

export type ArgmentType = {
    name: string | 'general';
    value: string;
};

export type Command = {
    name: string;
    type: 'prefix' | 'command';
    execute: (message: MessageDto, args?: ArgmentType[]) => void;
};

export class CommandRouter {
    constructor(
        private commands: Command[],
    ) {}

    router(message: MessageDto) {
        for (const command of this.commands) {
            if (command.type === 'prefix') {
                if (message.content.startsWith(command.name)) {
                    command.execute(message, this.parseArgment(message));
                }
            } else {
                if (message.content === command.name) {
                    command.execute(message);
                }
            }
        }
    }

    private parseArgment(message: MessageDto): ArgmentType[] {
        const args: ArgmentType[] = [];

        const content = message.content;

        const argments = content.split(' ');

        for (const argment of argments) {
            if (argment.startsWith('--')) {
                args.push({
                    name: argment.split('=')[0].slice(2),
                    value: argment.split('=')[1],
                });
            } else {
                args.push({
                    name: 'general',
                    value: argment,
                });
            }
        }

        return args;
    }
}
