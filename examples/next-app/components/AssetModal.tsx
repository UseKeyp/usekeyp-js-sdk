import React from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFormContext } from "context/FormContext";

/**
 * @remarks modal opens when user clicks on asset name
 * @returns modal that renders a list of assets
 */
const AssetModal = () => {
  const [selectedAsset, setSelectedAsset] = useState("USDC");
  const { setAsset } = useFormContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClickedAsset = (asset: string) => {
    setSelectedAsset(asset);
    setAsset(asset);
  };

  const handleDone = () => {
    setAsset(selectedAsset);
    onClose();
  };

  // TODO: get list of assets from API and render those instead
  const assets = ["ETH", "USDC", "DAI"];
  const renderAssets = assets.map((asset) => {
    return (
      <Box
        onClick={() => handleClickedAsset(asset)}
        key={asset}
        color={selectedAsset === asset ? "assetOrange" : "#C2C2C2"}
        px={[0, 0, "5rem"]}
      >
        <Text>{asset}</Text>
      </Box>
    );
  });

  return (
    <>
      <Button
        onClick={() => onOpen()}
        fontSize="9vh"
        fontWeight="extrabold"
        color="assetOrange"
        variant="none"
        mb={-5}
        ml="-.5rem"
        p={0}
      >
        {selectedAsset}
      </Button>
      <Box mt={"1.5rem"}>
        <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody fontSize="9vh" fontWeight="extrabold" color="#C2C2C2">
              {renderAssets}
            </ModalBody>
            <ModalFooter mx="-1.5rem" mb="-1.5rem">
              <Box w="full">
                <Button onClick={() => handleDone()} variant="formBlue">
                  Done
                </Button>
              </Box>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default AssetModal;
