import { RoleDto } from './Role.dto.ts';
import { UserDto } from './User.dto.ts';

export class EmojiDto {
    constructor(
        public id: string | null,
        public name: string | null,
        public roles?: RoleDto[],
        public user?: UserDto,
        public require_colons?: boolean,
        public managed?: boolean,
        public animated?: boolean,
        public available?: boolean,
    ) {}
}
