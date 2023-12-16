export class MessageReferenceDto {
    constructor(
        public message_id?: string,
        public channel_id?: string,
        public guild_id?: string,
        public fail_if_not_exists?: boolean
    ) {}
}