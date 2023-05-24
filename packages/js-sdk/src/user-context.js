import React, { createContext, useContext, useEffect, useState } from 'react';
import { SessionProvider, signIn, useSession } from 'next-auth/react';

const signInKeyp = (provider) =>
    signIn('keyp', undefined, `login_provider=${provider}`);

const UserContext = createContext({
    user: { signIn: signInKeyp },
});

const UserProvider = ({ children }) => {
    const { data: session } = useSession();
    const [user, setUser] = useState({});

    useEffect(() => {
        if (session) {
            setUser({ status: session.status, ...session.user });
        }
    }, [session]);

    return (
        <UserContext.Provider
            value={{
                user,
                signIn: signInKeyp,
            }}>
            {children}
        </UserContext.Provider>
    );
};

const useKeyp = () => useContext(UserContext);

const KeypProvider = ({ session, children }) => (
    <SessionProvider session={session}>
        <UserProvider>{children}</UserProvider>
    </SessionProvider>
);

export { KeypProvider, useKeyp };
