export class InstallParamsDto {
    constructor(
        public scopes: string[],
        public permissions: string
    ) {}
}