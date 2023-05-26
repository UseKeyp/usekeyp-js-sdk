import axios from 'axios';
import { signOut } from 'next-auth/react';

const keypClient = axios.create({
    baseURL: 'https://api.usekeyp.com/v1',
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
            signOut();
        }
        return Promise.reject(error);
    },
);

export { keypClient };
