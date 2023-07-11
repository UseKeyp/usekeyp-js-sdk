import axios from 'axios';
import { signOut } from 'next-auth/react';

/**
 * Axios client for Keyp to interact with Keyp's API and sign out the user if an access token is invalid
 */
const keypClient = axios.create({
    // baseURL: 'https://api.usekeyp.com/v1',
    baseURL: 'http://localhost:4001/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

keypClient.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error?.response?.status === 401) {
            if (typeof window !== 'undefined') {
                signOut();
            }
        }
        return Promise.reject(error);
    },
);

export { keypClient };
