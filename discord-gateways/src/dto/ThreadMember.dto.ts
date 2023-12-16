export class ThreadMemberDto {
    constructor(
        public join_timestamp: Date,
        public flags: number,
        public id?: string,
        public user_id?: string,
    ) {}
}