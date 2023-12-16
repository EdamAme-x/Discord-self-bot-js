export class EmbedFooterDto {
    constructor(
        public text: string,
        public icon_url?: string,
        public proxy_icon_url?: string
    ) {}
}