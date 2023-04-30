import { OktaAuth as Okta } from '@okta/okta-auth-js';
import type { AuthClient } from './';
export declare type AuthClientOkta = AuthClient;
export type { Okta };
export interface OktaUser extends AuthClient {
}
export declare const okta: (client: Okta) => AuthClientOkta;
//# sourceMappingURL=okta.d.ts.map