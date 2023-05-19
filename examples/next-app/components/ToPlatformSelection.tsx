import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { useFormContext } from "context/FormContext";
import React from "react";

/**
 * @remarks component gets rendered onto TransferForm component. Nested boxes are in place for styling purposes
 * @returns component that lets user select whether to enter Google or Discord username
 */
const ToPlatformSelection = () => {
  const { setPlatform, platform } = useFormContext();

  const handleActiveIcons = (platform: string): void => {
    if (platform === "google") {
      setPlatform("google");
    } else {
      setPlatform("discord");
    }
  };

  return (
    <HStack h="14vh">
      <Box maxH="14vh">
        <Text color="loginGray">To</Text>
      </Box>
      <Box
        onClick={() => handleActiveIcons("google")}
        h="11vh"
        w="11vh"
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="contain"
        bgImage={
          platform === "google" ? "social-bg-dark.svg" : "social-bg-light.svg"
        }
      >
        <Image src="google-white.png" alt="Google" mx="auto" w="5vh" pt="3vh" />
      </Box>
      <Box
        onClick={() => handleActiveIcons("discord")}
        h="11vh"
        w="11vh"
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="contain"
        bgImage={
          platform === "discord" ? "social-bg-dark.svg" : "social-bg-light.svg"
        }
      >
        <Image
          src="discord-white.svg"
          alt="Discord"
          mx="auto"
          w="5vh"
          pt="3.5vh"
        />
      </Box>
    </HStack>
  );
};

export default ToPlatformSelection;
