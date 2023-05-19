import NextAuth from "next-auth";
import { OAuthConfig } from "next-auth/providers";

const KEYP_API_DOMAIN =
  process.env.NEXT_PUBLIC_KEYP_API_DOMAIN || "https://api.usekeyp.com";

// Default redirect URL: http://localhost:3000/api/auth/callback/keyp

const KeypProvider: OAuthConfig<any> = {
  id: "keyp",
  name: "Keyp",
  type: "oauth",
  version: "2.0",
  clientId: process.env.NEXT_PUBLIC_KEYP_CLIENT_ID,
  wellKnown: `${KEYP_API_DOMAIN}/oauth/.well-known/openid-configuration`,
  checks: ["pkce"],
  authorization: { params: { scope: "openid email" } },
  client: { token_endpoint_auth_method: "none" },
  profile(profile) {
    return {
      id: profile.sub,
      username: profile.username,
      address: profile.address,
      email: profile.email,
      imageSrc: profile.imageSrc,
    };
  },
};

export default NextAuth({
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SESSION_COOKIE_SECRET,
  providers: [KeypProvider],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        // Comes from the returned JWT from Keyp
        token.accessToken = account.access_token;
      }
      if (profile) {
        // Comes from  the /userinfo endpoint
        token.username = profile.username;
        token.address = profile.address;
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
  },
});
