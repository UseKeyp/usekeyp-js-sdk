export declare type EthereumUser = {
    address: string | null;
};
export declare type Ethereum = {
    login(options: any): Promise<any>;
    logout(): Promise<any>;
    getToken(): Promise<null | string>;
    getUserMetadata(): Promise<null | EthereumUser>;
};
import type { AuthClient } from './';
export declare const ethereum: (client: Ethereum) => AuthClient;
//# sourceMappingURL=ethereum.d.ts.map