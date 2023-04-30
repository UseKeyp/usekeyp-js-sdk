import type { AuthClient } from './';
export interface SuperTokensUser {
    userId: string;
    accessTokenPayload: any;
}
export declare type SuperTokens = AuthClient;
declare type SessionRecipe = {
    signOut: () => Promise<void>;
    doesSessionExist: () => Promise<boolean>;
    getAccessTokenPayloadSecurely: () => Promise<any>;
    getUserId: () => Promise<string>;
};
declare type AuthRecipe = {
    redirectToAuth: (input: 'signin' | 'signup') => void;
};
export declare const supertokens: (client: {
    authRecipe: AuthRecipe;
    sessionRecipe: SessionRecipe;
}) => AuthClient;
export {};
//# sourceMappingURL=supertokens.d.ts.map