import { OverwriteDto } from "./Overwrite.dto.ts";
import { ThreadMemberDto } from "./ThreadMember.dto.ts";
import { ThreadMetadataDto } from "./ThreadMetadata.dto.ts";
import { UserDto } from "./User.dto.ts";

export class ChannelDto {
    constructor(
        public id: string,
        public type: number,
        public guild_id?: string,
        public position?: number,
        public permission_overwrites?: OverwriteDto[],
        public name?: string | null,
        public topic?: string | null,
        public nsfw?: boolean,
        public last_message_id?: string | null,
        public bitrate?: number,
        public user_limit?: number,
        public rate_limit_per_user?: number,
        public recipients?: UserDto[],
        public icon?: string | null,
        public owner_id?: string,
        public application_id?: string,
        public parent_id?: string | null,
        public last_pin_timestamp?: Date | null,
        public rtc_region?: string | null,
        public video_quality_mode?: number,
        public message_count?: number,
        public member_count?: number,
        public thread_metadata?: ThreadMetadataDto,
        public member?: ThreadMemberDto,
        public default_auto_archive_duration?: number,
        public permissions?: string
    ) {}
}