import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

interface LoadingProps {
  displayText: string;
}

const Loading: React.FC<LoadingProps> = ({ displayText }) => {
  return (
    <Box textAlign="center" h="80vh" py="25vh">
      <Box w="5rem" m="auto">
        <Image src="keyp_spinner.svg" alt="" />
      </Box>
      <Box fontSize="3rem" color="pink">
        <Text>{displayText}</Text>
      </Box>
    </Box>
  );
};

export default Loading;
