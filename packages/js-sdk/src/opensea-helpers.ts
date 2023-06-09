import { AxiosResponse } from 'axios';
import axios from 'axios';

interface RetrieveListingsParams {
    chain: string;
    apiKey: string;
    asset_contract_address?: string;
    limit?: number;
    token_ids?: string[];
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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Order {

}

interface CreateListingParams {
    chain: string;
    apiKey: string;
    parameters: OrderParameters;
    signature: string;
    protocol_address: string;
}

interface OrderParameters {
    offerer: string;
    zone: string;
    zoneHash: string;
    startTime: string;
    endTime: string;
    orderType: number;
    offer: OfferItem[];
    consideration: ConsiderationItem[];
    totalOriginalConsiderationItems: number;
    salt: number | string;
    conduitKey: string;
    nonce: number;
}

interface OfferItem {
    itemType: number;
    token: string;
    identifierOrCriteria: string;
    startAmount: string;
    endAmount: string;
}

interface ConsiderationItem {
    itemType: number;
    token: string;
    identifierOrCriteria: string;
    startAmount: string;
    endAmount: string;
    recipient?: string;
}

interface CreateListingResponse {
    status: string;
    error?: string;
}

/**
 * Create a listing on a Seaport contract on OpenSea
 * @param params
 */
const createListing = async (
    params: CreateListingParams
): Promise<CreateListingResponse> => {
    const { chain, apiKey, ...bodyParams } = params;

    if (!apiKey) {
        throw 'No API key provided';
    }
    const headers = {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
    };

    try {
        const response: AxiosResponse<CreateListingResponse> = await axios.post(
            `https://api.opensea.io/v2/orders/${chain}/seaport/listings`,
            bodyParams,
            {
                headers,
            }
        );
        return response.data;
    } catch (error) {
        return { status: 'FAILURE', error: error };
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

export { createListing, retrieveListings };
