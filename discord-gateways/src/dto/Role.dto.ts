import { RoleTagsDto } from "./RoleTags.dto.ts";

export class RoleDto {
    constructor(
        public id: string,
        public name: string, 
        public color: number,
        public hoist: boolean,
        public position: number,
        public permissions: string,
        public managed: boolean,
        public mentionable: boolean,
        public icon?: string | null,
        public unicode_emoji?: string | null,
        public tags?: RoleTagsDto
    ) {}
}