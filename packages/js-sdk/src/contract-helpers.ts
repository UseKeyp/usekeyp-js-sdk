import { keypClient } from "./keypClient";
import { AxiosResponse } from 'axios';

interface ReadContractParams {
    accessToken?: string;
    address?: string;
    abi?: string;
    args?: string[];
}

interface ReadContractResult {
    status?: string;
    explorerUrl?: string;
    response?: {
        type?: string;
        hex?: string;
    };
}

interface WriteContractParams {
    accessToken?: string;
    address?: string;
    abi?: string;
    args?: string[];
    value?: string;
}

interface WriteContractResult {
    status?: string;
    hash?: string;
    explorerUrl?: string;
    tx?: {
        type: number | string;
        chainId: number | string;
    }
}

/**
 * Reads a contract method
 * @param {string} accessToken - The access token for authentication
 * @param {string} address - The address of the contract
 * @param {string} abi - The ABI of the contract
 * @param {string[]} args - The arguments for the contract method
 */
const readContract = async ({accessToken, address, abi, args}: ReadContractParams): Promise<ReadContractResult> => {
    if (!accessToken) {
        throw 'No access token provided';
    }
    const headers = {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
    };
        const response: AxiosResponse = await keypClient.post('/contracts/method/read', {
            address: address,
            abi: abi,
            args: args,
        }, {
            headers,
        });
        return {
            status: response.data.status,
            explorerUrl: response.data.explorerUrl,
            response: response.data.response,
        };
};

/**
 * Writes to a contract method
 * @param {string} accessToken - The access token for authentication
 * @param {string} address - The address of the contract
 * @param {string} abi - The ABI of the contract
 * @param {string[]} args - The arguments for the contract method
 * @param {string} value - (Optional) Amount of network coin to send in units of wei
 */
const writeContract = async ({accessToken, address, abi, args, value}: WriteContractParams): Promise<WriteContractResult> => {
    if (!accessToken) {
        throw 'No access token provided';
    }
    const headers = {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
    };
        const response: AxiosResponse = await keypClient.post('/contracts/method/write', {
            address: address,
            abi: abi,
            args: args,
            value: value,
        }, {
            headers,
        });
        return {
            status: response.data.status,
            hash: response.data.hash,
            explorerUrl: response.data.explorerUrl,
            tx: response.data.tx,
        };
};

export { readContract, writeContract };


