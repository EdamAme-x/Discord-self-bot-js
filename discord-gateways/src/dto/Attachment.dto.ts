export class AttachmentDto {
    constructor(
        public id: string,
        public filename: string,
        public size: number,
        public url: string,
        public proxy_url: string,
        public description?: string,
        public content_type?: string,
        public height?: number | null,
        public width?: number | null,
        public ephemeral?: boolean
    ) {}
}