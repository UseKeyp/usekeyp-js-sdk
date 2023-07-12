import { AxiosResponse } from 'axios';
import axios from 'axios';
import {keypClient} from "./keypClient";

interface RetrieveListingsParams {
    chain: string;
    apiKey: string;
    asset_contract_address?: string;
    limit?: number;
    token_ids?: string[] | string;
    maker?: string;
    taker?: string;
    order_by?: string;
    order_direction?: string;
    listed_after?: number;
    listed_before?: number;
}

interface RetrieveListingsResponse {
    status: string;
    error?: string;
    orders?: Order[];
    next?: string;
    previous?: string;
}

interface ListingParams {
    accessToken?: string;
    network?: string;
    apiKey?: string;
    chain: string;
    parameters: object;
    signature: string;
    protocol_address: string;
}

interface ListingResult {
    status: string;
    hash: string;
    error: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Order {

}

/**
 * Creates a new NFT listing on OpenSea
 * @param params
 */
const createListing = async(params: ListingParams): Promise<ListingResult> => {
    const { apiKey, accessToken } = params;
    if (!apiKey) {
        throw 'No API key provided';
    }

    const headers = {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
    };

    const openSeaHeaders = {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'X-API-KEY': apiKey,
    }

    if (!params.chain || !params.parameters || !params.protocol_address) {
        throw 'Required information is missing';
    }

    try {
        const responseSign: AxiosResponse = await keypClient({
            method: 'POST',
            headers,
            url: '/sign',
            data: {
                message: JSON.stringify({...params.parameters}),
            },
        });

        console.log(responseSign.data.signature, 'signature')
        console.log(responseSign, 'responseSign')

        const signature = responseSign.data.signature;

        const responseOpenSea: AxiosResponse = await axios.post(`https://api.opensea.io/v2/orders/${params.chain}/seaport/listings`, {
            ...params.parameters,
            signature,
            protocol_address: params.protocol_address,
        }, {
            headers: openSeaHeaders,
        });
        return { status: responseOpenSea.data.status, hash: responseOpenSea.data.hash, error: responseOpenSea.data.error };
    } catch (error) {
        return { status: 'FAILURE', hash: '', error: error };
    }
};

/**
 * Retrieve active listings on a given NFT for a Seaport contract on OpenSea
 * @param params
 */
const retrieveListings = async (
    params: RetrieveListingsParams
): Promise<RetrieveListingsResponse> => {
    const { chain, apiKey, ...queryParams } = params;

    if (!apiKey) {
        throw 'No API key provided';
    }
    const headers = {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
    };

    try {
        const response: AxiosResponse<RetrieveListingsResponse> = await axios.get(`https://api.opensea.io/v2/orders/${chain}/seaport/listings`, {
            params: queryParams,
            headers,
        });
        return response.data;
    } catch (error) {
        return { status: 'FAILURE', error: error };
    }
};

export { retrieveListings, createListing };
