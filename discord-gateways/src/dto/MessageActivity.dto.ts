export class MessageActivityDto {
    constructor(
        public type: number,
        public party_id?: string
    ) {}
}