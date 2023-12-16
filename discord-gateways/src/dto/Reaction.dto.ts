import { EmojiDto } from "./Emoji.dto.ts";

export class ReactionDto {
    constructor(
        public count: number,
        public me: boolean,
        public emoji: EmojiDto
    ) {}
}