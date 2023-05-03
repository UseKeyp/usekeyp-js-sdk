import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useFormContext } from "../context/FormContext";
import ButtonSpacingWrapper from "./ButtonSpacingWrapper";
import UseKeypApi from "../hooks/useKeypApi";
// import UseNodeMailer from "../hooks/useNodemailer";
import { supportedAssets } from "utils/general";
import { TransferData } from "types/restAPI";
import { TransferError } from "types/keypEndpoints";
import { KEYP_BASE_URL_V1 } from "utils/general";

/**
 * @remarks code below is used for request feature. DO NOT REMOVE
 */
// interface HandleRequestProps {
//   amount: number | undefined;
//   asset: string;
//   username: string | undefined;
// }

/**
 * @remarks - this component lets user review the transaction before sending. ButtonSpacingWrapper is used place "Send" button at the bottom of the page.
 * @returns - review form that displays the amount, asset, and username of the transaction.
 */
const ReviewTransfer = () => {
  const [responseError, setResponseError] = useState<
    TransferError | undefined
  >();

  const {
    type,
    platform,
    amount,
    setAmount,
    asset,
    setAsset,
    username,
    setRenderTxPage,
    setRenderReviewPage,
  } = useFormContext();
  const [sendingTx, setSendingTx] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  /**
   * @remarks - makes POST request to /tokens/transfers endpoint. If `toUserId` is provided, `toAddress` can be an empty string
   * @param toUserId - username should be format `GOOGLE-1098204....` or `DISCORD-109245...`
   * @param token - ERC20 token address
   * @param amount - token amount
   */
  const handleTokenTransfer = async (
    toUserId: string,
    token: string,
    amount: string
  ): Promise<TransferData> => {
    const request: TransferData = await UseKeypApi({
      accessToken: session?.user.accessToken,
      method: "POST",
      endpointUrl: `${KEYP_BASE_URL_V1}/tokens/transfers`,
      data: {
        toUserUsername: toUserId,
        toUserProviderType: platform === "discord" ? "DISCORD" : "GOOGLE",
        tokenAddress: supportedAssets[token],
        tokenType: "ERC20",
        amount,
      },
    });

    return request;
  };

  const handleSendTx = async () => {
    if (asset && amount && username) {
      const req = await handleTokenTransfer(username, asset, amount.toString());
      console.log(req);
      if (req.status === "SUCCESS") {
        console.log(req);
        router.push({
          pathname: "/confirmation/send",
          query: {
            amount,
            asset,
            username,
            hash: req.hash,
          },
        });
        return req;
      } else {
        setResponseError(req);
        setSendingTx(false);
      }
    }
  };

  /**
   *
   * @remarks - handleRequest is for REQUEST feature. DO NOT DELETE
   *
   */
  // when user requests funds from another user, Nodemailer sends an email to user
  // const handleRequest = async ({
  //   amount,
  //   asset,
  //   username,
  // }: HandleRequestProps) => {
  //   const data = {
  //     amount,
  //     asset,
  //     username,
  //   };
  //   try {
  //     await UseNodeMailer(data);
  //     router.push({
  //       pathname: "/confirmation/request",
  //       query: {
  //         amount,
  //         asset,
  //         username,
  //       },
  //     });
  //     return;
  //   } catch (err) {
  //     setSendingTx(false);
  //     return err;
  //   }
  // };

  const handleTxType = async () => {
    setSendingTx(true);
    if (type === "send") {
      await handleSendTx();
    }
    // DO NOT DELETE CODE BELOW. IT'S FOR REQUEST FEATURE
    // else if (type === "request") {
    //   handleRequest({ amount, asset, username });
    // }
  };

  // resetting setAsset ensures that `displayBalance` in AssetBalance component renders correctly
  const handleCancel = () => {
    setAmount(0);
    setAsset("USDC");
    setRenderReviewPage(false);
    setRenderTxPage(true);
  };

  return (
    <ButtonSpacingWrapper isTransactionSlider={false}>
      <SimpleGrid
        columns={1}
        px={["0.25rem", "5rem"]}
        maxH="88vh"
        fontSize="9vh"
      >
        {/* Buttons */}
        <GridItem>
          <HStack color="formBlueDark" h="14vh" justifyContent="space-between">
            <Box>
              <Text color="formBlueDark" opacity={0.5}>
                {type === "send" ? "Send" : "Request"}
              </Text>
            </Box>
            <Button
              variant="none"
              opacity={0.5}
              fontSize={["9vh"]}
              color="cancelOrange"
              onClick={() => handleCancel()}
            >
              Cancel
            </Button>
          </HStack>
        </GridItem>
        {/* start form values */}
        <GridItem>
          <Text color="formGreen">{amount}</Text>
        </GridItem>
        <GridItem>
          <Text color="assetOrange">{asset}</Text>
        </GridItem>
        <GridItem>
          <HStack justifyContent="start">
            <Box mr={"0.5rem"}>
              <Text color="loginGray">To</Text>
            </Box>
            <Box
              textAlign="center"
              placeSelf="center"
              bgImage="social-bg-dark.svg"
              h="11vh"
              w="11vh"
              bgRepeat="no-repeat"
              bgPosition="center"
              bgSize="contain"
            >
              {platform === "discord" ? (
                // discord image
                <Image
                  src="discord-white.svg"
                  alt="Discord"
                  mx="auto"
                  mt="2.5vh"
                  h="6vh"
                  w="6vh"
                />
              ) : (
                // google image
                <Image
                  src="google-white.png"
                  alt="Discord"
                  mx="auto"
                  mt="3vh"
                  h="5vh"
                />
              )}
            </Box>
          </HStack>
        </GridItem>
        {/* username */}
        <GridItem h="14vh">
          <Text color="formLightBlue">{username}</Text>
        </GridItem>
      </SimpleGrid>
      {/* </SimpleGrid> */}
      <Box mt="1rem" mx="-1.5rem">
        {responseError?.error && (
          <Box
            w="80%"
            m="auto"
            textAlign="center"
            fontSize="26px"
            fontWeight="normal"
            color="errorOrange"
          >
            <Text>{responseError.error}</Text>
          </Box>
        )}
        <Button
          onClick={() => handleTxType()}
          variant="formGreen"
          isLoading={sendingTx}
          loadingText={type === "request" ? "Requesting..." : "Sending..."}
        >
          {type === "send" ? "Send!" : "Request!"}
        </Button>
      </Box>
    </ButtonSpacingWrapper>
  );
};

export default ReviewTransfer;
