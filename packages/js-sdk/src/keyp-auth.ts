import { OAuthConfig, OAuthUserConfig } from "next-auth/providers";

export interface KeypProfile extends Record<string, any> {
    id: string
    username: string
    email: string
    address: string
}

export function Keyp<P extends KeypProfile>(
    options: OAuthUserConfig<P>
): OAuthConfig<P> {
    const { clientId } = options;

    const KEYP_API_DOMAIN =
        process.env.NEXT_PUBLIC_KEYP_API_DOMAIN || "https://api.usekeyp.com";

    return {
        id: "keyp",
        name: "Keyp",
        type: "oauth",
        version: "2.0",
        clientId,
        wellKnown: `${KEYP_API_DOMAIN}/oauth/.well-known/openid-configuration`,
        checks: ["pkce"],
        authorization: { params: { scope: "openid email" } },
        client: { token_endpoint_auth_method: "none" },
        profile(profile) {
            return {
                id: profile.sub,
                username: profile.username,
                email: profile.email,
                address: profile.address,
            };
        },
        options,
    }
}