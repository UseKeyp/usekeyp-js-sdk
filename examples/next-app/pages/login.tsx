import React from "react";
import {
  Box, Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
// @ts-ignore
import { LoginPortal } from "@usekeyp/ui-kit";
import { signInKeyp } from "@usekeyp/js-sdk";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && session.status === "authenticated") {
      router.push("/");
    }
  }, [session, router]);

  const handleLoginClick = (provider: string) => {
    signInKeyp(provider);
  };

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
          <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              m="auto"
              textAlign="left"
              px={[0, 0, "10rem", "20rem"]}
          >
            <Stack
                direction="column"
                spacing={4}
                textAlign="left"
            >
              <div className="justify-center">
                <LoginPortal
                    providers={["GOOGLE", "DISCORD"]}
                    onClick={handleLoginClick}
                />
              </div>
            </Stack>
          </Flex>
        </Box>
      </>
  );
};

export default Login;