import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  HStack,
  Text,
  VStack,
  Flex,
  Tooltip,
  Image,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import useSocialLogo from "../hooks/useSocialLogo";
import { RxCopy } from "react-icons/rx";
import { useSizeProvider } from "../context/SizeContext";

const Navbar = () => {
  const [openTooltip, setOpenTooltip] = useState(false);
  const { data: session } = useSession();
  const socialLogo = useSocialLogo(session);
  const { setNavHeight } = useSizeProvider();

  const address = session && session.user.address;
  const username = session && session.user.username;

  const handleNavigateHome = () => {
    window.location.href = "/";
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address || "");
    setOpenTooltip(true);
    setTimeout(() => {
      setOpenTooltip(false);
    }, 1000);
  };

  const renderSocialLogo = () => {
    if (socialLogo === "discord") {
      return <Image src="discord-color.svg" alt="" w="15px" />;
    } else if (socialLogo === "google") {
      return <Image src="google-color.svg" alt="" w="15px" />;
    } else return;
  };

  useEffect(() => {
    const navHeight = document.getElementById("navbar")?.clientHeight;
    setNavHeight(navHeight || 0);
  }, [setNavHeight]);

  return (
    <Flex
      w="100%"
      py="1rem"
      id="navbar"
      fontWeight="medium"
      px={[0, 0, "5rem"]}
      h="12vh"
      alignItems="start"
    >
      {/* Box holds logo */}
      <Box w="40%" alignSelf="start">
        <Heading as="h1" color="pink" onClick={() => handleNavigateHome()}>
          Kaching
        </Heading>
      </Box>
      {/* VStack holds everything else */}
      <VStack w="60%" alignItems="end" spacing={-0.5}>
        {session && (
          // HStack holds address and sign out
          <HStack color="loginBtnGray" mb="0.5rem">
            <HStack>
              <Text>
                {address?.slice(0, 4)}
                <span>...</span>
                {address?.slice(-6)}
              </Text>
              <Tooltip
                label="Address copied to clipboard"
                isOpen={openTooltip}
                placement="bottom-end"
              >
                <Box onClick={handleCopyAddress}>
                  <RxCopy />
                </Box>
              </Tooltip>
            </HStack>

            <Box
              pl={["0.25rem"]}
              onClick={() => signOut()}
              cursor="pointer"
              _hover={{ opacity: 0.5 }}
            >
              <Text>Sign Out</Text>
            </Box>
          </HStack>
        )}
        {/* HStack holds social logo and username */}
        <HStack>
          <Box>{renderSocialLogo()}</Box>
          <Text color="formBlueDark">{username}</Text>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Navbar;
