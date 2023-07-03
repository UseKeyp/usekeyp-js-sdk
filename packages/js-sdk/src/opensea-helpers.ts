import { AxiosResponse } from 'axios';
import axios from 'axios';

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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Order {

}

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

export { retrieveListings };
