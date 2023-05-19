import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaDiscord, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [activeBtn, setActiveBtn] = useState<string>();
  const session = useSession();
  const router = useRouter();

  console.log(session);

  const handleGoogleLogin = () => {
    signIn("keyp", undefined, "login_provider=GOOGLE");
  };

  const handleDiscordLogin = () => {
    signIn("keyp", undefined, "login_provider=DISCORD");
  };

  useEffect(() => {
    if (session && session.status === "authenticated") {
      router.push("/");
    }
  }, [session, router]);

  return (
    <>
      <Box textAlign="center" fontFamily="sharpie" px="0.5rem">
        <Heading
          as="h1"
          color="pink"
          fontSize={["5rem", "8rem"]}
          fontWeight="extrabold"
        >
          <Text fontFamily="sharpie">Kaching</Text>
        </Heading>

        <Box my={"2rem"}>
          <Text textAlign="center" fontSize="5rem">
            👋
          </Text>
        </Box>
        <Stack
          direction="column"
          m="auto"
          spacing={3}
          textAlign="left"
          px={[0, 0, "10rem", "20rem"]}
        >
          <Box
            w="full"
            textAlign="left"
            color="loginBtnGray"
            fontFamily="inter"
            fontWeight="normal"
          >
            Signup or Login with
          </Box>
          <HStack
            onMouseEnter={() => setActiveBtn("google")}
            onMouseLeave={() => setActiveBtn("")}
          >
            <Button
              variant="login"
              onClick={() => handleGoogleLogin()}
              _hover={{
                bg: "googleBlue",
                color: "white",
              }}
            >
              <Image
                src={
                  activeBtn === "google"
                    ? "social-bg-white.svg"
                    : "social-bg-light.svg"
                }
                alt=""
                w="2.5rem"
              />
              <Box position="absolute" ml="0.65rem">
                <FaGoogle
                  color={activeBtn === "google" ? "#4285F4" : "white"}
                  size="20px"
                />
              </Box>
              <Text ml="1rem">Google</Text>
            </Button>
          </HStack>
          <HStack
            onMouseEnter={() => setActiveBtn("discord")}
            onMouseLeave={() => setActiveBtn("")}
          >
            <Button
              variant="login"
              onClick={() => handleDiscordLogin()}
              _hover={{
                bg: "discordBlue",
                color: "white",
              }}
            >
              <Image
                src={
                  activeBtn === "discord"
                    ? "social-bg-white.svg"
                    : "social-bg-light.svg"
                }
                alt=""
                w="2.5rem"
              />
              <Box
                position="absolute"
                ml="0.65rem"
                _hover={{
                  color: "#5865F2",
                }}
              >
                <FaDiscord
                  color={activeBtn === "discord" ? "#5865F2" : "white"}
                  size="20px"
                />
              </Box>
              <Text ml="1rem">Discord</Text>
            </Button>
          </HStack>
          <Box>
            <Text color="#B0B6C1" fontSize="0.75rem" fontFamily="inter">
              Powered by 🍩 Keyp
            </Text>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Login;
