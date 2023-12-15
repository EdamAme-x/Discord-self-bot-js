export const CONST = {
    'api': 'https://discord.com/api/v9/',
    'token': Deno.env.get('token') ?? '',
} as const;
