import type { Magic, MagicUserMetadata } from 'magic-sdk';
import type { AuthClient } from './';
export declare type MagicLink = Magic;
export declare type MagicUser = MagicUserMetadata;
export interface AuthClientMagicLink extends AuthClient {
    login(options: {
        email: string;
        showUI?: boolean;
    }): Promise<any>;
}
export declare const magicLink: (client: MagicLink) => AuthClientMagicLink;
//# sourceMappingURL=magicLink.d.ts.map