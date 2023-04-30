import Clerk from '@clerk/clerk-js';
import { UserResource as ClerkUserResource, SignOut } from '@clerk/types';
import type { AuthClient } from '.';
export interface AuthClientClerk extends AuthClient {
    logout: SignOut;
}
export type { Clerk };
export declare type ClerkUser = ClerkUserResource & {
    roles: string[] | null;
};
export declare const clerk: (client: Clerk) => AuthClientClerk;
//# sourceMappingURL=clerk.d.ts.map