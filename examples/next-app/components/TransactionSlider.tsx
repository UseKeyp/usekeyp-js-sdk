import React, { useEffect, useRef } from "react";
import { Box, Button, Flex, HStack, useMediaQuery } from "@chakra-ui/react";
import { useFormContext } from "../context/FormContext";
import { useSizeProvider } from "../context/SizeContext";

/**
 * @remarks - this component is used to determine the "type" of transaction
 * @returns - div containing scrollable buttons
 */
const TransactionSlider = () => {
  const { setType, type, renderReviewPage, isConfirming } = useFormContext();
  const { setTxSliderHeight } = useSizeProvider();
  const scrollRef = useRef<HTMLHeadingElement>(null!);
  const [isHigherThan450] = useMediaQuery("(max-height: 450px)");
  const [isHigherThan320] = useMediaQuery("(max-height: 320px)");

  // const cleanedBtnValues = [
  //   "send",
  //   "wallet",
  //   // "request",
  //   "fund",
  //   "cashout",
  // ];

  const btnValues = [
    "Send",
    "Wallet",
    // "Request",
    "Fund",
    "Cash Out",
  ];

  const handleType = (value: string) => {
    // const currentIndex = cleanedBtnValues.indexOf(type);
    // const newIndex = cleanedBtnValues.indexOf(
    //   value.toLowerCase().replace(" ", "")
    // );
    // if (currentIndex > newIndex) {
    //   scrollRef.current.scrollLeft -= 275;
    // } else if (currentIndex === newIndex) {
    //   null;
    // } else {
    //   if (newIndex === 4) {
    //     // Cash Out needs more scroll
    //     scrollRef.current.scrollLeft += 255;
    //   } else {
    //     scrollRef.current.scrollLeft += 235;
    //   }
    // }
    setType(value.toLowerCase().replace(" ", ""));
  };

  const renderButtons = () => {
    return (
      <HStack spacing={"-1.5rem"} overflowX="scroll">
        {btnValues.map((value) => (
          <Box key={value}>
            <Button
              py={"3rem"}
              onClick={() => handleType(value)}
              id={value.toLowerCase().replace(" ", "")}
              variant="none"
              fontSize="9vh"
              fontWeight="extrabold"
              color="formBlueDark"
              opacity={type === value.toLowerCase().replace(" ", "") ? 1 : 0.5}
            >
              {value}
            </Button>
          </Box>
        ))}
      </HStack>
    );
  };

  /**
   * @remarks - calculation below is used for page formatting
   *
   */
  useEffect(() => {
    const txSliderHeight = document.getElementById("txSlider")?.clientHeight;
    setTxSliderHeight(txSliderHeight || 0);
  }, [setTxSliderHeight]);

  return (
    <Flex
      display={renderReviewPage || isConfirming ? "none" : "block"}
      ref={scrollRef}
      px={["0rem", "0rem", "5rem"]}
      overflow="hidden"
      direction="row"
      id="txSlider"
      position="relative"
      mb={!isHigherThan320 ? 0 : "0.5rem"}
      h={!isHigherThan450 ? "14vh" : "20vh"}
      minH="14vh"
    >
      {renderButtons()}
    </Flex>
  );
};

export default TransactionSlider;
