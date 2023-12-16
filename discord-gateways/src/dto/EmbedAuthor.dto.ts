export class EmbedAuthorDto {
    constructor(
        public name: string,
        public url?: string,
        public icon_url?: string,
        public proxy_icon_url?: string
    ) {}   
}