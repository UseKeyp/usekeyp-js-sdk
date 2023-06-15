import React, { useEffect, useState } from "react";
import TransferForm from "../components/TransferForm";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useFormContext } from "../context/FormContext";
import TransactionSlider from "../components/TransactionSlider";
import Fund from "../components/Fund";
import CashOut from "../components/CashOut";
import { Box } from "@chakra-ui/react";
import ReviewTransfer from "../components/ReviewTransfer";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import Wallet from "components/Wallet";

/**
 * @remarks if user selects "send", render Send component, else render "Request"
 * @returns home page that renders the appropriate component based on user selection
 */

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { type, renderTxPage, renderReviewPage, isConfirming } =
    useFormContext();
  const session = useSession();
  const router = useRouter();

  const componentLogic = () => {
    if (type === "send" || type === "request") {
      if (renderTxPage) {
        return <TransferForm />;
      } else if (renderReviewPage) {
        return <ReviewTransfer />;
      }
    } else if (type === "wallet") {
      return <Wallet />;
    } else if (type === "fund") {
      return <Fund />;
    } else if (type === "cashout") {
      return <CashOut />;
    }
  };

  // control flow below is used to prevent flickering of components
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
    <Box>
      {isLoading && <Loading displayText={"loading..."} />}
      {isLoading && isConfirming && type === "send" && (
        <Loading displayText="Preparing transaction..." />
      )}
      {isLoading && isConfirming && type === "request" && (
        <Loading displayText="Preparing request..." />
      )}
      {!isLoading && !isConfirming && (
        <>
          <Navbar />
          <TransactionSlider />
          {componentLogic()}
        </>
      )}
    </Box>
  );
};

export default Home;
