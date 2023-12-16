import { AttachmentDto } from "./Attachment.dto.ts";
import { UserDto } from "./User.dto.ts";
import { GuildMemberDto } from "./GuildMember.dto.ts";
import { MentionsDto } from "./Mentions.dto.ts";
import { RoleDto } from "./Role.dto.ts";
import { ChannelMentionDto } from "./ChannelMention.dto.ts";
import { EmbedDto } from "./Embed.dto.ts";
import { ReactionDto } from "./Reaction.dto.ts";
import { MessageActivityDto } from "./MessageActivity.dto.ts";
import { ApplicationDto } from "./Application.dto.ts";
import { MessageInteractionDto } from "./MessageInteraction.dto.ts";
import { ChannelDto } from "./Channel.dto.ts";
import { MessageStickerDto } from "./MessageSticker.dto.ts";
import { StickerDto } from "./Sticker.dto.ts";
import { MessageReferenceDto } from "./MessageReference.dto.ts";

export class MessageDto {
    constructor(
        public id: string,
        public channel_id: string, 
        public author: UserDto,
        public content: string, 
        public timestamp: Date, 
        public edited_timestamp: Date | null, 
        public tts: boolean, 
        public mention_everyone: boolean,  
        public mentions: MentionsDto[], 
        public mention_roles: RoleDto[], 
        public attachments: AttachmentDto[],
        public embeds: EmbedDto[], 
        public pinned: boolean, 
        public type: number, 
        public guild_id?: string,
        public member?: GuildMemberDto,
        public mention_channels?: ChannelMentionDto[],
        public reactions?: ReactionDto[],
        public nonce?: number | string, 
        public webhook_id?: string,
        public activity?: MessageActivityDto,
        public application?: ApplicationDto,
        public application_id?: string,
        public message_reference?: MessageReferenceDto, 
        public flags?: number, 
        public referenced_message?: MessageDto[], 
        public interaction?: MessageInteractionDto,
        public thread?: ChannelDto,
        public components?: unknown[],
        public sticker_items?: MessageStickerDto[],
        public stickers?: StickerDto[]
        ) {}
}