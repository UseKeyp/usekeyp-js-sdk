type Options = {
    clientId: string;
    secret?: string;
};

type Profile = {
    sub: string;
    username: string;
    address: string;
    email: string;
    imageSrc: string;
};

type Token = {
    accessToken?: string;
    username?: string;
    address?: string;
    sub?: string;
};

type Account = {
    access_token: string;
};

type Session = {
    user: {
        accessToken?: string;
        username?: string;
        address?: string;
        id?: string;
    };
};

const KeypProvider = (options: Options) => {
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
        profile(profile: Profile) {
            return {
                id: profile.sub,
                username: profile.username,
                address: profile.address,
                email: profile.email,
                imageSrc: profile.imageSrc,
            };
        },
    };
};

/**
 * Creates an easy plug-in for NextAuth.js to use Keyp as an authentication provider
 */
export const KeypAuth = (options: Options) => {
    const keypProvider = KeypProvider(options);

    return {
        secret: options.secret,
        providers: [keypProvider],
        callbacks: {
            async jwt({ token, account, profile }: { token: Token; account: Account; profile: Profile }) {
                if (account) {
                    // Comes from the returned JWT from Keyp
                    token.accessToken = account.access_token;
                }
                if (profile) {
                    // Comes from the /userinfo endpoint
                    token.username = profile.username;
                    token.address = profile.address;
                    token.sub = profile.sub;
                }
                return token;
            },
            async session({ session, token }: { session: Session; token: Token }) {
                // Send properties to the client, like an access_token from a provider.
                if (token) {
                    session.user.accessToken = token.accessToken;
                    session.user.username = token.username;
                    session.user.address = token.address;
                    session.user.id = token.sub;
                }
                return session;
            },
        },
    };
};
