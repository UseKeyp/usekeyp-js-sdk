import type { Auth0Client as Auth0 } from '@auth0/auth0-spa-js';
import type { AuthClient } from './';
export declare type AuthClientAuth0 = AuthClient;
export type { Auth0 };
export interface Auth0User {
}
export declare const auth0: (client: Auth0) => AuthClientAuth0;
//# sourceMappingURL=auth0.d.ts.map