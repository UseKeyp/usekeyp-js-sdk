import { signOut } from "next-auth/react";
import { keypClient } from "./keypClient";

/**
 * Transfers a token by user id
 * @param {string} accessToken - The access token for authentication
 * @param {string} amount - The amount of the token to transfer (for ERC20 tokens)
 * @param {string} tokenId - The unique identifier of the token (for ERC721 tokens)
 * @param {string} toAddress - The address of the recipient (either this or toUserId is required)
 * @param {string} toUserId - The user id of the recipient in format PROVIDER-ID (either this or toAddress is required)
 * @param {string} tokenType - The token type (e.g., 'ERC20', 'ERC721')
 * @param {string} tokenAddress - The address of the token contract
 * @returns {Object} The result of the transfer in the form { result, loading, error }
 * @throws {string} If any of the required parameters are missing or incorrect
 */
const tokenTransferByUserId = async ({ accessToken, amount, tokenId, toAddress, toUserId, tokenType, tokenAddress }) => {
    const headers = {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
    };

    if (!amount && tokenType === 'ERC20') throw 'Invalid amount'
    if (!tokenId && tokenType === 'ERC721') throw 'Invalid tokenId'
    if (!tokenAddress) throw 'Invalid token address'
    if (!tokenType) throw 'Invalid token type'

    try {
        const response = await keypClient({
            method: 'POST',
            headers,
            url: 'tokens/transfers',
            data: {
                amount,
                toAddress,
                toUserId,
                tokenType,
                tokenAddress,
                tokenId,
            },
        });

        return { result: response.data, loading: false, error: response.data.error };
    } catch (error) {
        if (error?.response?.status === 401) {
            signOut();
        }
        return { result: null, loading: false, error: error };
    }
};

/**
 * Transfers a token by username
 * @param {string} accessToken - The access token for authentication
 * @param {string} amount - The amount of the token to transfer (for ERC20 tokens)
 * @param {string} tokenId - The unique identifier of the token (for ERC721 tokens)
 * @param {string} toUserUsername - The username of the recipient
 * @param {string} toUserProviderType - The provider type for the recipient's username
 * @param {string} tokenType - The token type (e.g., 'ERC20', 'ERC721')
 * @param {string} tokenAddress - The address of the token contract
 * @returns {Object} The result of the transfer in the form { result, loading, error }
 * @throws {string} If any of the required parameters are missing or incorrect
 */
const tokenTransferByUsername = async ({ accessToken, amount, tokenId, toUserUsername, toUserProviderType, tokenType, tokenAddress }) => {
    const headers = {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
    };

    if (!amount && tokenType === 'ERC20') throw 'Invalid amount'
    if (!tokenId && tokenType === 'ERC721') throw 'Invalid tokenId'
    if (!tokenAddress) throw 'Invalid token address'
    if (!tokenType) throw 'Invalid token type'

    try {
        const response = await keypClient({
            method: 'POST',
            headers,
            url: 'tokens/transfers',
            data: {
                amount,
                toUserUsername,
                toUserProviderType,
                tokenType,
                tokenAddress,
            },
        });

        return { result: response.data, loading: false, error: response.data.error };
    } catch (error) {
        if (error?.response?.status === 401) {
            signOut();
        }
        return { result: null , loading: false, error};
    }
};

export { tokenTransferByUsername, tokenTransferByUserId };