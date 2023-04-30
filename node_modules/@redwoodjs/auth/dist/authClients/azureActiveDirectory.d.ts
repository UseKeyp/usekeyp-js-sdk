import type { PublicClientApplication as AzureActiveDirectory } from '@azure/msal-browser';
import type { AuthClient } from './';
export type { AzureActiveDirectory };
export declare type AzureActiveDirectoryClient = AzureActiveDirectory;
export interface AzureActiveDirectoryUser {
}
export declare const azureActiveDirectory: (client: AzureActiveDirectoryClient) => AuthClient;
//# sourceMappingURL=azureActiveDirectory.d.ts.map