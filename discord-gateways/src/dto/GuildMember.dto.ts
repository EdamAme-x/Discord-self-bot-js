import { UserDto } from './User.dto.ts';

export class GuildMemberDto {
    constructor(
        public roles: string[],
        public joined_at: Date,
        public deaf: boolean,
        public mute: boolean,
        public user?: UserDto,
        public nick?: string | null,
        public avatar?: string | null,
        public premium_since?: Date | null,
        public pending?: boolean,
        public permissions?: string,
        public communication_disabled_until?: Date | null,
    ) {}
}
