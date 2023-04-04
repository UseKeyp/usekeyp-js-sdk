import { useState } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const colorVariants = {
  discord: "hover:bg-brand-discord",
  twitter: "hover:bg-brand-twitter",
  google: "hover:bg-brand-google",
  apple: "hover:bg-black",
  black: "hover:bg-black",
};

const getHoverBg = (provider) => {
  switch (provider) {
    case "discord":
      return colorVariants.discord;
    case "twitter":
      return colorVariants.twitter;
    case "google":
      return colorVariants.google;
    case "apple":
      return colorVariants.apple;
    default:
      return colorVariants.black;
  }
};

const LoginButton = ({ provider, size, onLogin }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(!loading);
    onLogin(provider);
  };

  const hoverBg = getHoverBg(provider);

  return (
    <div className="mb-4">
      {size === "square" ? (
        <Button
          size={size}
          onClick={handleClick}
          classNameVariant={`justify-center bg-white
          ${hoverBg}`}
          borderColor="border-gray-200"
          textColor="text-gray-1200"
        >
          <div className="flex justify-center">
            {loading ? (
              <Icon name="loading_animated" width="30" height="30" />
            ) : (
              <Icon name={provider} />
            )}
          </div>
        </Button>
      ) : (
        <Button
          size={size}
          fluid={true}
          onClick={handleClick}
          classNameVariant={`justify-start bg-white hover:text-white 
          ${hoverBg}
        `}
          borderColor="border-gray-200"
          textColor="text-gray-1200"
        >
          <div className="flex items-center mr-4 ml-2 w-full">
            <div className="mr-4">
              <Icon name={provider} className="mr-2" />
            </div>
            <div className="text-base font-normal capitalize">{provider}</div>
            {loading && (
              <div className="ml-auto">
                <Icon name="loading_animated" width="30" height="30" />
              </div>
            )}
          </div>
        </Button>
      )}
    </div>
  );
};

export default LoginButton;
