import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const colorVariants = {
  DISCORD: {
    hover: "hover:bg-brand-discord",
    active: "bg-brand-discord",
    borderColor: "border-brand-discord",
    hoverBorder: "hover:border-brand-discord",
    hoverTextColor: "text-white",
  },
  TWITTER: {
    hover: "hover:bg-brand-twitter",
    active: "bg-brand-twitter",
    borderColor: "border-brand-twitter",
    hoverBorder: "hover:border-brand-twitter",
  },
  GOOGLE: {
    hover: "hover:bg-brand-google",
    active: "bg-brand-google",
    borderColor: "border-brand-google",
    hoverBorder: "hover:border-brand-google",
  },
  APPLE: {
    hover: "hover:bg-black",
    active: "bg-black",
    borderColor: "border-black",
    hoverBorder: "hover:border-black",
  },
  TWITCH: {
    hover: "hover:bg-brand-twitch",
    active: "bg-brand-twitch",
    borderColor: "border-brand-twitch",
    hoverBorder: "hover:border-brand-twitch",
  },
  CHESS: {
    hover: "hover:bg-brand-chess",
    active: "bg-brand-chess",
    borderColor: "border-brand-chess",
    hoverBorder: "hover:border-brand-chess",
  },
  SPOTIFY: {
    hover: "hover:bg-gray-200",
    active: "bg-gray-200",
    borderColor: "border-gray-200",
    hoverBorder: "hover:border-gray-200",
  },
  REDDIT: {
    hover: "hover:bg-gray-200",
    active: "bg-gray-200",
    borderColor: "border-gray-200",
    hoverBorder: "hover:border-gray-200",
  },
  FACEBOOK: {
    hover: "hover:bg-gray-200",
    active: "bg-gray-200",
    borderColor: "border-gray-200",
    hoverBorder: "hover:border-gray-200",
  },
  EPIC_GAMES: {
    hover: "hover:bg-brand-epic_games",
    active: "bg-brand-epic_games",
    borderColor: "border-brand-epic_games",
    hoverBorder: "hover:border-brand-epic_games",
  },
  MICROSOFT: {
    hover: "hover:bg-gray-2400",
    active: "bg-gray-2400",
    borderColor: "border-gray-2400",
    hoverBorder: "hover:border-gray-2400",
  },
  black: {
    hover: "hover:bg-black",
    active: "bg-black",
    borderColor: "border-black",
    hoverBorder: "hover:border-black",
  },
};

const getBrandColor = (provider) => {
  return colorVariants[provider] || colorVariants.black;
};

const getHoverTextColor = (provider) => {
  if (
    provider !== "SPOTIFY" &&
    provider !== "REDDIT" &&
    provider !== "FACEBOOK"
  ) {
    return "hover:text-white";
  }
};

const getLabelFromProvider = (provider) => {
  if (provider === "CHESS") {
    return "Chess.com";
  } else if (provider === "EPIC_GAMES") {
    return "Epic Games";
  } else {
    return `${provider[0]}${provider.substring(1).toLowerCase()}`;
  }
};

const LoginButton = ({
  provider,
  size,
  onLogin,
  loading = false,
  disabled,
}) => {
  const {
    hover: hoverBg,
    active: activeBg,
    borderColor: borderColor,
    hoverBorder,
  } = getBrandColor(provider);
  return (
    <div className="mb-4">
      {size === "square" ? (
        <Button
          size={size}
          onClick={onLogin}
          classNameVariant={`justify-center ${
            loading ? activeBg : "bg-white"
          } ${!disabled && hoverBg}`}
          borderColor={`${loading ? borderColor : "border-gray-200"} ${
            !loading && !disabled && hoverBorder
          }`}
          disabled={disabled}
        >
          <div className="flex justify-center">
            {loading ? (
              <Icon name="loading_animated" width="30" height="30" />
            ) : (
              <Icon
                name={provider}
                loading={loading}
                disabled={disabled}
                width="24"
                height="24"
              />
            )}
          </div>
        </Button>
      ) : (
        <Button
          size={size}
          fluid={true}
          onClick={onLogin}
          classNameVariant={`justify-center ${
            loading ? activeBg : "bg-white"
          } ${!disabled && hoverBg}`}
          borderColor={`${loading ? borderColor : "border-gray-200"} ${
            !loading && !disabled && hoverBorder
          }`}
          textColor={`
          ${loading && "text-white"} 
          ${!loading && disabled && "text-gray-800"}
          ${!loading && !disabled && "text-gray-1200"}
          ${!disabled && getHoverTextColor(provider)}`}
          disabled={disabled}
        >
          <div className="flex items-center mr-4 ml-2 w-full">
            <div className="mr-4">
              <Icon
                name={provider}
                className="mr-2"
                loading={loading}
                disabled={disabled}
                width="24"
                height="24"
              />
            </div>
            <div className="text-base font-normal">
              {getLabelFromProvider(provider)}
            </div>
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
