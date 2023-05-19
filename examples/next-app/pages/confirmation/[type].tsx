import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import ButtonSpacingWrapper from "../../components/ButtonSpacingWrapper";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Loading from "../../components/Loading";
import { blockExplorerLink } from "utils/general";

/**
 * @remarks - this component displays the transaction confirmation. ButtonSpacingWrapper is used place "Return" button at the bottom of the page
 * @returns - confirmation page that displays the amount, asset, and username of the transaction
 */
const Confirmation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const session = useSession();
  const router = useRouter();

  const type = router.query.type;
  const query = router.query;
  console.log(query);

  useEffect(() => {
    if (session && session.status === "unauthenticated") {
      router.push("/login");
    } else if (session && session.status === "loading") {
      setIsLoading(true);
    } else if (session && session.status === "authenticated") {
      setIsLoading(false);
    }
  }, [session, router]);

  return (
    <>
      {isLoading && <Loading displayText="loading..." />}
      {!isLoading && (
        <>
          <Navbar />
          <ButtonSpacingWrapper isTransactionSlider={false}>
            <VStack fontWeight="extrabold" px={[0, 0, "5rem"]} fontSize="5vh">
              <Box w="full">
                <Heading w="full" as="h1" fontSize="12vh">
                  Kaching
                </Heading>
              </Box>
              <Stack w="full" spacing={"-0.75rem"} pb="3rem">
                <HStack>
                  <Text color="formGreen">{query.amount}</Text>
                  <Text color="assetOrange">{query.asset}</Text>
                </HStack>
                <Box>
                  <Text color="loginGray">
                    {type === "send" ? "Sent to" : "Request sent to:"}
                  </Text>
                </Box>
                <Box>
                  <Text color="formBlueDark">{query.username}</Text>
                </Box>
              </Stack>
              <Stack w="full" spacing={"-0.75rem"}>
                <Box>
                  <Text color="lightGray">
                    {type === "send" ? "Transaction Sent!" : "Request Sent!"}
                  </Text>
                </Box>
                {type === "send" && (
                  <Box>
                    <Text color="formBlueDark">
                      <Link
                        href={blockExplorerLink(query.hash?.toString() || "")}
                        target="_blank"
                      >
                        View
                      </Link>
                    </Text>
                  </Box>
                )}
              </Stack>
            </VStack>
            <Box mx="-1.5rem">
              <Link href="/">
                <Button variant="formBlue">Return</Button>
              </Link>
            </Box>
          </ButtonSpacingWrapper>
        </>
      )}
    </>
  );
};

export default Confirmation;
