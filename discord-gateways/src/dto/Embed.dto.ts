import { EmbedAuthorDto } from "./EmbedAuthor.dto.ts";
import { EmbedFieldDto } from "./EmbedField.dto.ts";
import { EmbedFooterDto } from "./EmbedFooter.dto.ts";
import { EmbedImageDto } from "./EmbedImage.dto.ts";
import { EmbedProviderDto } from "./EmbedProvider.dto.ts";
import { EmbedThumbnailDto } from "./EmbedThumbnail.dto.ts";
import { EmbedVideoDto } from "./EmbedVideo.dto.ts";

export class EmbedDto {
    constructor(
        public title?: string,
        public type?: string,
        public description?: string,
        public url?: string,
        public timestamp?: Date,
        public color?: number,
        public footer?: EmbedFooterDto,
        public image?: EmbedImageDto,
        public thumbnail?: EmbedThumbnailDto,
        public video?: EmbedVideoDto,
        public provider?: EmbedProviderDto,
        public author?: EmbedAuthorDto,
        public fields?: EmbedFieldDto[]
    ) {}
}