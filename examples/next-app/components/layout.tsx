import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import HeadMetadata from "./HeadMetadata";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <HeadMetadata />
      <Box
        alignItems="start"
        maxW="100%"
        maxH="100vh"
        fontSize="1rem"
        fontWeight="extrabold"
        fontFamily="sharpie"
        px={["0.5rem", "1rem"]}
        overflowY="auto"
        overflowX="hidden"
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
