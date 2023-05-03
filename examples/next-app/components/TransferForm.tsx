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

/**
 * @remarks - this component renders a form that allows user to send a transaction. ButtonSpacingWrapper is used to make sure the Review button stays at the bottom of the page
 * @returns div containing a form
 */
const TransferForm = () => {
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

  const emailValidation = (val: string) => {
    if (platform === "google") {
      return val.includes("@") || "must be valid gmail address";
    } else {
      return val.includes("#") || "must be valid discord address";
    }
  };

  const handleReview = async (): Promise<void> => {
    const valid = await trigger();
    if (valid) {
      const stateUpdates = () => {
        setAmount(values.amount);
        setUsername(values.username);
        setRenderTxPage(false);
        setRenderReviewPage(true);
      };

      if (type === "send") {
        stateUpdates();
      } else if (type === "request") {
        stateUpdates();
      }
    }
    return;
  };

  useEffect(() => {
    if (balanceError) {
      setError("amount", { type: "custom", message: "Insufficient balance" });
    } else {
      clearErrors("amount");
    }
  }, [balanceError, setError, clearErrors]);

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
                validate: emailValidation,
              })}
            />
          </Box>
        </GridItem>
      </SimpleGrid>
      <Box mx="-1.5rem">
        <Button
          onClick={() => handleReview()}
          variant={!isValid ? "formGray" : "formBlue"}
        >
          Review
        </Button>
      </Box>
    </ButtonSpacingWrapper>
  );
};

export default TransferForm;
