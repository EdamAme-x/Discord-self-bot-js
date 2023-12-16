export class ChannelMentionDto {
    constructor(
        public id: string,
        public guild_id: string,
        public type: number,
        public name: string
    ) {}   
}