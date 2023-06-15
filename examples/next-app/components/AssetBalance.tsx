import { Box, HStack, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useFormContext } from "context/FormContext";
import { signOut, useSession } from "next-auth/react";
import React, { Dispatch, useEffect, useState } from "react";
import { UserBalance } from "types/keypEndpoints";
import { supportedAssets } from "utils/general";

interface AssetBalanceProps {
  setBalanceError: Dispatch<boolean>;
}
/**
 * @remarks component calls UseTokenBalance hook to get user token balance from Keyp API
 * @param setBalanceError - useState function passed in from TransferForm. If this gets set to true, error about balance will render on TransferForm
 * @returns div that renders token balance for selected token. Renders an error message if user balance < amount user wants to send
 */
const AssetBalance: React.FC<AssetBalanceProps> = ({ setBalanceError }) => {
  const [userAssets, setUserAssets] = useState<UserBalance | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const { type, asset, amount } = useFormContext();
  const { data: session } = useSession();
  const tokenAddress = supportedAssets[asset];

  const loadingImage = (
    <HStack>
      <Text>Loading...</Text>
      <Image src="keyp_spinner.svg" alt="" w="1.5rem" />
    </HStack>
  );

  const balance = () => {
    if (userAssets) {
      if (asset === "MATIC") {
        let formattedAsset = userAssets["ETH"]?.formatted;
        return Number(formattedAsset).toFixed(4);
      } else {
        let { ...address } = userAssets;
        let formattedAsset = Object.values(address)[0].formatted;
        return Number(formattedAsset).toFixed(4);
      }
    } else {
      return null;
    }
  };
  const displayBalance = balance();

  useEffect(() => {
    /**
     * @remarks - pass boolean to parent component TransferForm. If balance < amount, return true and display error message in TransferForm. Loading indicator shows if API call lags
     * @param amount - user generated asset amount from input. Taken from FormContext
     * @param balance - balance of asset
     * @returns boolean value comparing amount to balance
     */
    const compareBalanceToInput = (
      amount: number | undefined,
      balance: number
    ): void => {
      if (amount && displayBalance) {
        if (balance < amount && type === "send") {
          setBalanceError(true);
        } else {
          setBalanceError(false);
        }
      }
    };

    compareBalanceToInput(amount, Number(displayBalance));
  }, [type, amount, displayBalance, setBalanceError]);

  useEffect(() => {
    const ACCESS_TOKEN = session?.user.accessToken;
    const userId = session?.user.id;

    const options = {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    const urlMATIC = `https://api.usekeyp.com/v1/users/${userId}/balance`;
    const urlNotMATIC = `https://api.usekeyp.com/v1/users/${userId}/balance/${tokenAddress}`;
    axios
      .get(asset === "MATIC" ? urlMATIC : urlNotMATIC, options)
      .then((response) => {
        setUserAssets(response.data);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          signOut();
        }
        setIsLoading(false);
        console.error(error);
      });
    // eslint-disable-next-line
  }, [asset, tokenAddress]);

  return (
    <Box
      color="loginBtnGray"
      fontSize="3.5vh"
      fontWeight="normal"
      textAlign="right"
      w="100%"
      lineHeight={1}
    >
      <Text color="socialIconsGray">Your Balance</Text>

      {isLoading && loadingImage}
      {displayBalance !== "NaN" ? (
        <HStack>
          <Text display={isLoading ? "none" : "block"}>
            {displayBalance ? `${"$"}${displayBalance} ${asset}` : "Error"}
          </Text>
        </HStack>
      ) : (
        loadingImage
      )}
    </Box>
  );
};

export default AssetBalance;
