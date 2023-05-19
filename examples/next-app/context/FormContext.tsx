import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useState,
} from "react";

export const FormContext = createContext<{
  platform: string;
  setPlatform: Dispatch<"google" | "discord">;
  renderTxPage: boolean;
  setRenderTxPage: Dispatch<boolean>;
  renderReviewPage: boolean;
  setRenderReviewPage: Dispatch<boolean>;
  isConfirming: boolean;
  setIsConfirming: Dispatch<boolean>;
  type: string;
  setType: Dispatch<string>;
  amount: number | undefined;
  setAmount: Dispatch<number | undefined>;
  asset: string;
  setAsset: Dispatch<string>;
  username: string | undefined;
  setUsername: Dispatch<string | undefined>;
  handleHomePage: any;
}>({
  platform: "google",
  setPlatform: useState,
  renderTxPage: true,
  setRenderTxPage: useState,
  renderReviewPage: false,
  setRenderReviewPage: useState,
  isConfirming: false,
  setIsConfirming: useState,
  type: "send",
  setType: useState,
  amount: undefined,
  setAmount: useState,
  asset: "USDC",
  setAsset: useState,
  username: undefined,
  setUsername: useState,
  handleHomePage: undefined,
});

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [type, setType] = useState("send");
  const [renderTxPage, setRenderTxPage] = useState(true);
  const [renderReviewPage, setRenderReviewPage] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [platform, setPlatform] = useState<"google" | "discord">("google");
  const [amount, setAmount] = useState<number | undefined>();
  const [asset, setAsset] = useState<string>("USDC");
  const [username, setUsername] = useState<string | undefined>();

  // TODO: fix return type. Without "return" it throws an error
  const handleHomePage = () => {
    setType("send");
    setRenderTxPage(true);
    setRenderReviewPage(false);
    setPlatform("google");
    setAmount(undefined);
    setAsset("USDC");
    setUsername(undefined);
  };

  const value = {
    type,
    setType,
    platform,
    setPlatform,
    amount,
    setAmount,
    asset,
    setAsset,
    username,
    setUsername,
    renderTxPage,
    setRenderTxPage,
    renderReviewPage,
    setRenderReviewPage,
    isConfirming,
    setIsConfirming,
    handleHomePage,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = () => {
  const {
    type,
    setType,
    platform,
    setPlatform,
    amount,
    setAmount,
    asset,
    setAsset,
    username,
    setUsername,
    renderTxPage,
    setRenderTxPage,
    renderReviewPage,
    setRenderReviewPage,
    isConfirming,
    setIsConfirming,
    handleHomePage,
  } = useContext(FormContext);

  return {
    type,
    setType,
    platform,
    setPlatform,
    amount,
    setAmount,
    asset,
    setAsset,
    username,
    setUsername,
    renderTxPage,
    setRenderTxPage,
    renderReviewPage,
    setRenderReviewPage,
    isConfirming,
    setIsConfirming,
    handleHomePage,
  };
};
