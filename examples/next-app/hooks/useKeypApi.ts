import axios from "axios";
import { Transfers } from "../types/Transfers";

interface UseKeypApiProps {
  accessToken: string | undefined;
  method: "GET" | "POST";
  endpointUrl: string;
  data?: Transfers;
}

/**
 * @remarks - This hook is used to fetch data from the Keyp API
 * @param accessToken - from session
 * @param method - request type
 * @param endpointUrl
 * @param endpoints - endpoint
 * @param urlParams1
 * @param urlParams2
 * @param data - (optional) arguments for request data
 * @returns
 */
const UseKeypApi = async ({
  accessToken,
  method,
  endpointUrl,
  data,
}: UseKeypApiProps) => {
  const headers = {
    "Content-type": "application/json",
    Authorization: "Bearer " + accessToken,
  };

  return await axios({
    method,
    headers,
    url: endpointUrl,
    data,
  })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export default UseKeypApi;
