export class EmbedThumbnailDto {
    constructor(
        public url?: string,
        public proxy_url?: string,
        public height?: number,
        public width?: number
    ) {}
}