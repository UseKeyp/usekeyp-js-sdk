declare const WebAuthnClient: {
    isSupported: () => Promise<boolean>;
    isEnabled: () => boolean;
    authenticate: () => Promise<boolean>;
    register: () => Promise<boolean>;
};
export default WebAuthnClient;
export declare type WebAuthnClientType = typeof WebAuthnClient;
//# sourceMappingURL=index.d.ts.map