export class UserDto {
    constructor(
        public id: string,
        public username: string, 
        public discriminator: string, 
        public avatar: string,
        public bot?: boolean,
        public system?: boolean,
        public mfa_enabled?: boolean,
        public banner?: string,
        public accent_color?: number,
        public locale?: string,
        public verified?: boolean,
        public email?: string | null,
        public flags?: number,
        public premium_type?: number,
        public public_flags?: number) {}
}