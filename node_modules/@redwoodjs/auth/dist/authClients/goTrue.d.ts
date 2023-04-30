import type { default as GoTrue } from 'gotrue-js';
import type { User } from 'gotrue-js';
import type { AuthClient } from './index';
export declare type GoTrueUser = User;
export type { GoTrue };
export interface AuthClientGoTrue extends AuthClient {
    login(options: {
        email: string;
        password: string;
        remember?: boolean;
    }): Promise<GoTrueUser>;
    signup(options: {
        email: string;
        password: string;
        remember?: boolean;
    }): Promise<GoTrueUser>;
    client: GoTrue;
}
export declare const goTrue: (client: GoTrue) => AuthClientGoTrue;
//# sourceMappingURL=goTrue.d.ts.map