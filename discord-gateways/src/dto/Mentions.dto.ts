import { GuildMemberDto } from './GuildMember.dto.ts';
import { UserDto } from './User.dto.ts';

export class MentionsDto extends UserDto {
    constructor(
        public id: string,
        public username: string,
        public discriminator: string,
        public avatar: string,
        public member: GuildMemberDto,
        public bot?: boolean,
        public system?: boolean,
        public mfa_enabled?: boolean,
        public banner?: string,
        public accent_color?: number,
        public locale?: string,
        public verified?: boolean,
        public email?: string | null,
        public flags?: number,
        public premium_type?: number,
        public public_flags?: number,
    ) {
        super(id, username, discriminator, avatar, bot, system, mfa_enabled, banner, accent_color, locale, verified, email, flags, premium_type, public_flags);
    }
}
