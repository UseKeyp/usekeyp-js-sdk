import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  GridItem,
  HStack,
  Input,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { FieldValues, useForm } from "react-hook-form";
import AssetModal from "./AssetModal";
import { useFormContext } from "../context/FormContext";
import ButtonSpacingWrapper from "./ButtonSpacingWrapper";
import AssetBalance from "./AssetBalance";
import { inputColorLogicErrors } from "utils/general";
import ToPlatformSelection from "./ToPlatformSelection";
import {useSession} from "next-auth/react";
import {Chain, OpenSeaSDK} from "opensea-js";
import {AlchemyProvider} from "@ethersproject/providers";
import {Wallet} from "ethers";

/**
 * @remarks - this component renders a form that allows user to send a transaction. ButtonSpacingWrapper is used to make sure the Review button stays at the bottom of the page
 * @returns div containing a form
 */
const TransferForm = () => {
  const { data: session } = useSession();
  const [balanceError, setBalanceError] = useState(false);
  const [isHigherThan300] = useMediaQuery("(max-height: 300px)");

  const {
    type,
    setAmount,
    platform,
    setUsername,
    setRenderTxPage,
    setRenderReviewPage,
  } = useFormContext();

  const localForm = useForm<FieldValues>();
  const {
    getValues,
    register,
    setError,
    clearErrors,
    watch,
    trigger,
    formState: { errors, isValid },
  } = localForm;

  console.log(isValid);

  const values = getValues();
  watch();

  useEffect(() => {
    if (balanceError) {
      setError("amount", { type: "custom", message: "Insufficient balance" });
    } else {
      clearErrors("amount");
    }
  }, [balanceError, setError, clearErrors]);


  async function testTransaction() {
    const provider = new AlchemyProvider(
        "maticmum", process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
    );
    const wallet = new Wallet(process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY || "", provider)
    // signing logic
    // const headers = {
    //   'Content-type': 'application/json',
    //   Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_LOCAL_ACCESS_TOKEN,
    // };
    // const params = {
    //   asset: {
    //     tokenId: "96",
    //     tokenAddress: "0xc9234371D7943C0A333AB1eE4e9E6583323efD5d",
    //   },
    //   accountAddress: session?.user.address || "",
    //   startAmount: 3,
    //   endAmount: 0.1,
    // }
    //
    // const responseSign: AxiosResponse = await keypClient({
    //   method: 'POST',
    //   headers,
    //   url: '/sign',
    //   data: {
    //     message: JSON.stringify({...params}),
    //   },
    // });
    //
    // const signature = responseSign.data.signature;

    console.log(provider, 'provider')


    // provider.getSigner = function() {
    //   return {
    //     signMessage: () => {
    //     return signature
    //     },
    //     getAddress() {
    //       return "0x1a4abb5217112e7bb1e96023c8a5329ecd3629b6"
    //     },
    //     signTransaction: () => {
    //         console.log('signing transaction')
    //     return ""
    //     }
    //   }
    // }


    // @ts-ignore
    const openseaSDK = new OpenSeaSDK(wallet, {
      chain: Chain.Mumbai,
      //apiKey must be blank for test networks
      apiKey: "",
    });

    try {
      const listing = await openseaSDK.createSellOrder({
        asset: {
          tokenId: "96",
          // Treasure Chess NFT contract
          tokenAddress: "0xc9234371D7943C0A333AB1eE4e9E6583323efD5d",
        },
        accountAddress: "0xd5e099c71B797516c10ED0F0d895f429C2781142",
        startAmount: 3,
        endAmount: 0.1,
      });
      console.log(listing);
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <ButtonSpacingWrapper isTransactionSlider={true}>
      <SimpleGrid columns={1} spacing={"1rem"} px={[0, 0, "5rem"]} maxH="74vh">
        {/* Asset box */}
        <GridItem>
          <ErrorMessage
            errors={errors}
            name="amount"
            render={({ message }) => {
              return (
                <Box
                  display={message ? "block" : "none"}
                  mb={isHigherThan300 ? "-1.25rem" : "-0.75rem"}
                  position="relative"
                  zIndex={1}
                  color="errorOrange"
                  fontWeight="normal"
                  fontSize={isHigherThan300 ? "1.25rem" : "1rem"}
                >
                  {message}
                </Box>
              );
            }}
          />
          {/* Input */}
          <Button
              onClick={() => testTransaction()}
              variant="secondary"
              mx="0.5rem"
          >
            Send Unsigned Transaction
          </Button>
          <Box
            position="relative"
            mt={balanceError ? "1rem" : 0}
            mb={"-1.5rem"}
          >
            <Input
              type="number"
              step={0.1}
              placeholder="0.00"
              variant="unstyled"
              fontSize="9vh"
              fontWeight="bold"
              color={inputColorLogicErrors(errors, type)}
              autoComplete="off"
              _placeholder={{
                color: "formGreen",
              }}
              {...register("amount", {
                required: {
                  value: true,
                  message: `Enter asset amount`,
                },
                onChange: (e) => setAmount(e.target.value),
                validate: (n) => n > 0 || "Value must be greater than 0",
              })}
            />
          </Box>
        </GridItem>
        {/* asset */}
        <GridItem px={"0.5rem"} pt={1} alignContent="center">
          <HStack spacing="1rem" justifyContent="space-between">
            <AssetModal />
            <Box pt={3}>
              <AssetBalance setBalanceError={setBalanceError} />
            </Box>
          </HStack>
        </GridItem>
        {/* Platform select */}
        <GridItem mb={2}>
          <ToPlatformSelection />
        </GridItem>
        {/* username */}
        <GridItem>
          <Box color="errorOrange" fontWeight="normal" fontSize="1.25rem">
            <ErrorMessage
              errors={errors}
              name="username"
              render={({ message }) => {
                return (
                  <Box
                    display={message ? "block" : "none"}
                    mt={message ? "-1rem" : "0"}
                    mb={isHigherThan300 ? "-1.25rem" : "-0.75rem"}
                    fontSize={isHigherThan300 ? "1.25rem" : "1rem"}
                    position="relative"
                    zIndex={1}
                  >
                    {platform === "google" ? "Email" : "Username"} {message}
                  </Box>
                );
              }}
            />
          </Box>
          <Box position="relative" mt={!errors.username ? "-2rem" : "-1rem"}>
            <Input
              variant="unstyled"
              fontSize="9vh"
              fontWeight="bold"
              type={platform === "google" ? "email" : "text"}
              _placeholder={{
                color: "#89DCFF",
              }}
              placeholder={
                platform === "google" ? "Add Gmail" : "Discord Username"
              }
              color={errors.username ? "errorEmailRed" : "#89DCFF"}
              autoComplete="off"
              {...register("username", {
                required: "cannot be blank",
                minLength: {
                  value: 1,
                  message: "cannot be blank",
                },
                // validate: emailValidation,
              })}
            />
          </Box>
        </GridItem>
      </SimpleGrid>
      <Box mx="-1.5rem">
        <Button
          // onClick={() => handleReview()}
          variant={!isValid ? "formGray" : "formBlue"}
        >
          Review
        </Button>
      </Box>
    </ButtonSpacingWrapper>
  );
};

export default TransferForm;
