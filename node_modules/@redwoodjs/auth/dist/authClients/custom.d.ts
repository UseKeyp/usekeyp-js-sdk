export declare type Custom = any;
import { AuthClient } from './';
export interface AuthClientCustom extends AuthClient {
    client: Custom;
    type: 'custom';
}
export declare const custom: (authClient: AuthClientCustom) => AuthClientCustom;
//# sourceMappingURL=custom.d.ts.map