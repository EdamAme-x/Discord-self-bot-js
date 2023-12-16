export class OverwriteDto {
    constructor(
        public id: string,
        public type: 0 | 1,
        public allow: string,
        public deny: string
    ) {}
}