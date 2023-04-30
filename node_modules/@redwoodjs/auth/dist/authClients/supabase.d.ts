import type { SupabaseClient, ApiError, Session, User, Provider } from '@supabase/supabase-js';
import type { AuthClient } from './index';
export declare type Supabase = SupabaseClient;
export declare type SupabaseUser = User;
export interface AuthClientSupabase extends AuthClient {
    /**
     * Log in an existing user, or login via a third-party provider.
     *
     * @param options The user login details.
     * @param options.email The user's email address.
     * @param options.password The user's password.
     * @param options.phone The user's phone number.
     * @param options.refreshToken A valid refresh token that was returned on login.
     * @param options.provider One of the supported third-party providers.
     * @see https://supabase.com/docs/guides/auth#third-party-logins
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param scopes A space-separated list of scopes granted to the OAuth application.
     */
    login(options: {
        email?: string | undefined;
        password?: string | undefined;
        phone?: string | undefined;
        provider?: Provider;
        refreshToken?: string;
        redirectTo?: string;
        scopes?: string;
    }): Promise<{
        session: Session | null;
        user: User | null;
        provider?: Provider;
        url?: string | null;
        error: ApiError | null;
    }>;
    logout(): Promise<{
        error: ApiError | null;
    }>;
    /**
     * Creates a new user.
     *
     * @param options The user login details.
     * @param options.email The user's email address.
     * @param options.password The user's password.
     * @param options.phone The user's phone number.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     */
    signup(options: {
        email?: string;
        password?: string;
        phone?: string;
        redirectTo?: string;
    }): Promise<{
        user: User | null;
        session: Session | null;
        error: ApiError | null;
    }>;
    /**
     * Restore Redwood authentication state when an OAuth or magiclink
     * callback redirects back to site with access token
     * by restoring the Supabase auth session
     *
     */
    restoreAuthState(): void;
    /**
     * Log in a user given a User supplied OTP received via mobile.
     * @param phone The user's phone number.
     * @param token The user's password.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     */
    verifyOTP(options: {
        phone: string;
        token: string;
        redirectTo?: string;
    }): Promise<{
        user: User | null;
        session: Session | null;
        error: ApiError | null;
    }>;
    client: Supabase;
}
export declare const supabase: (client: Supabase) => AuthClientSupabase;
//# sourceMappingURL=supabase.d.ts.map