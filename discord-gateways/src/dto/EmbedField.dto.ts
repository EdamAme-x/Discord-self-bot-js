export class EmbedFieldDto {
    constructor(
        public name: string,
        public value: string,
        public inline?: boolean
    ) {}
}