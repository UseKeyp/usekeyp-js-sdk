import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    expires: string;
    user: {
      id: string;
      accessToken: string | undefined;
      username: string | undefined;
      address: string | undefined;
    } & DefaultSession["user"];
    status: string;
  }

  interface Profile {
    username: string | undefined;
    address: string | undefined;
    imageSrc: string | undefined;
  }

  interface Account {
    access_token: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    accessToken: string;
    username: string | undefined;
    address: string | undefined;
    sub: string;
  }
}
