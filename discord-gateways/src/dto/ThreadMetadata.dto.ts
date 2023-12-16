export class ThreadMetadataDto {
    constructor(
        public archived: boolean,
        public auto_archive_duration: 60 | 1440 | 4320 | 10080,
        public archive_timestamp: Date,
        public locked: boolean,
        public invitable?: boolean,
        public create_timestamp?: Date | null
    ) {}
}