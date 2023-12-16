import { GuildMemberDto } from "./GuildMember.dto.ts";
import { UserDto } from "./User.dto.ts";

export class MessageInteractionDto {
    constructor(
        public id: string,
        public type: unknown,
        public name: string,
        public user: UserDto,
        public member?: GuildMemberDto
    ) {}
}