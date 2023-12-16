import { InstallParamsDto } from "./InstallParams.dto.ts";
import { TeamDto } from "./Team.dto.ts";
import { UserDto } from "./User.dto.ts";

export class ApplicationDto {
    constructor(
        public id: string,
        public name: string,
        public icon: string | null,
        public description: string,
        public bot_public: boolean,
        public bot_require_code_grant: boolean,
        public verify_key: string,
        public team: TeamDto | null,
        public rpc_origins?: string[],
        public terms_of_service_url?: string,
        public privacy_policy_url?: string,
        public owner?: UserDto,
        public guild_id?: string,
        public primary_sku_id?: string,
        public slug?: string,
        public cover_image?: string,
        public flags?: number,
        public tags?: string[],
        public install_params?: InstallParamsDto,
        public custom_install_url?: string
    ) {}
}