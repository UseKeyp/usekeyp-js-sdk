import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { UserBalance } from "types/keypEndpoints";
import { KEYP_BASE_URL_V1, supportedAssets } from "utils/general";

const Wallet = () => {
  const [assets, setAssets] = useState<UserBalance[] | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();

  const renderBalances = () => {
    const assetsList = assets && Object.values(assets);

    if (assetsList && assetsList.length > 1) {
      return assetsList?.map((asset: any) => {
        return (
          <HStack spacing="1rem" w="full" key={asset.symbol}>
            <Text>${Number(asset.formatted).toFixed(2)}</Text>
            <Text>{asset.symbol === "ETH" ? "MATIC" : asset.symbol}</Text>
          </HStack>
        );
      });
    } else if (assetsList && assetsList.length === 0) {
      return (
        <Box>
          <Text>No balance to display</Text>
        </Box>
      );
    }
  };

  useEffect(() => {
    const ACCESS_TOKEN = session?.user.accessToken;
    const userId = session?.user.id;

    const options = {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    const firstRequest = `${KEYP_BASE_URL_V1}/users/${userId}/balance`;
    const secondRequest = `${KEYP_BASE_URL_V1}/users/${userId}/balance/${supportedAssets.DAI}`;

    axios
      .all([
        axios.get(firstRequest, options),
        axios.get(secondRequest, options),
      ])
      .then(
        axios.spread((firstResponse, secondResponse) => {
          let DAI = Object.values(secondResponse.data);
          setAssets({ ...firstResponse.data, DAI: DAI[0] });
          setIsLoading(false);
        })
      )
      .catch((error) => console.error(error));
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      w={["full", "full", "80%", "50%"]}
      mx="auto"
      px={[0, 0, "5rem"]}
      justifyContent="start"
      mt="2rem"
    >
      {isLoading && (
        <VStack>
          <Text fontSize="2rem" color="pink" fontWeight="normal">
            Loading...
          </Text>
          <Image src="keyp_spinner.svg" alt="" w="3rem" />
        </VStack>
      )}
      {!isLoading && (
        <>
          <Heading as="h2" color="socialIconsGray">
            Tokens
          </Heading>
          <VStack spacing="0.5rem" fontSize="7vh" color="loginGray">
            {renderBalances()}
          </VStack>
        </>
      )}
    </Box>
  );
};

export default Wallet;
