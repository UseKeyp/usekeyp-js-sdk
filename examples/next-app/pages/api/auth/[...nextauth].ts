import { Keyp } from "@usekeyp/js-sdk";
import NextAuth, {Account, CallbacksOptions, NextAuthOptions, Profile} from "next-auth";

const callbacks :  Partial<CallbacksOptions<Profile, Account>> | undefined = {
    async jwt({token, account, profile}) {
        if (account) {
            // Comes from the returned JWT from Keyp
            token.accessToken = account.access_token;
        }
        if (profile) {
            // Comes from the /userinfo endpoint
            token.username = profile.username;
            token.address = profile.address;
            if (profile.sub != null) {
                token.sub = profile.sub;
            }
        }
        return token;
    },
    async session({ session, token }) {
        // Send properties to the client, like an access_token from a provider.
        if (token) {
            session.user.accessToken = token.accessToken;
            session.user.username = token.username;
            session.user.address = token.address;
            session.user.id = token.sub;
        }
        return session;
    },
}

const keypAuthOptions: NextAuthOptions = {
    providers: [
        //@ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
        Keyp({
            clientId: process.env.KEYP_CLIENT_ID || '', // From dev portal
            clientSecret: process.env.KEYP_COOKIE_SECRET || '', // Random string
        }),
    ],
    callbacks: callbacks,
}

export default NextAuth(keypAuthOptions);

