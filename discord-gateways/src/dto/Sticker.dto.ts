import { UserDto } from "./User.dto.ts";

export class StickerDto {
    constructor(
        public id: string,
        public name: string,
        public description: string | null,
        public tags: string,
        public type: number,
        public format_type: number,
        public pack_id?: string,
        public asset?: string,
        public available?: boolean,
        public guild_id?: string,
        public user?: UserDto,
        public sort_value?: number
    ) {}
}