import { signIn } from "next-auth/react";

type Provider = string;

/**
 * Helper function to sign in with Keyp using NextAuth.js
 */
const signInKeyp = (provider: Provider): void => {
    signIn("keyp", undefined, `login_provider=${provider}`);
};

export { signInKeyp }