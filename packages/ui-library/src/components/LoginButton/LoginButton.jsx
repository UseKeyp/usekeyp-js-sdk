import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const colorVariants = {
  discord: { hover: "hover:bg-brand-discord", active: "bg-brand-discord" },
  twitter: { hover: "hover:bg-brand-twitter", active: "bg-brand-twitter" },
  google: { hover: "hover:bg-brand-google", active: "bg-brand-google" },
  apple: { hover: "hover:bg-black", active: "bg-black" },
  black: { hover: "hover:bg-black", active: "bg-black" },
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

const LoginButton = ({
  provider,
  size,
  onLogin,
  loading = false,
  disabled,
}) => {
  const { hover: hoverBg, active: activeBg } = getHoverBg(provider);

  return (
    <div className="mb-4">
      {size === "square" ? (
        <Button
          size={size}
          onClick={onLogin}
          classNameVariant={`justify-center ${loading ? activeBg : ""} ${
            !disabled && hoverBg
          }`}
          borderColor="border-gray-200"
          disabled={disabled}
        >
          <div className="flex justify-center">
            {loading ? (
              <Icon name="loading_animated" width="30" height="30" />
            ) : (
              <Icon name={provider} loading={loading} disabled={disabled} />
            )}
          </div>
        </Button>
      ) : (
        <Button
          size={size}
          fluid={true}
          onClick={onLogin}
          classNameVariant={`justify-center ${loading ? activeBg : ""} ${
            !disabled && hoverBg
          }`}
          borderColor="border-gray-200"
          textColor={`${loading ? "text-white" : "text-gray-1200"} ${
            !disabled && "hover:text-white"
          }`}
          disabled={disabled}
        >
          <div className="flex items-center mr-4 ml-2 w-full">
            <div className="mr-4">
              <Icon
                name={provider}
                className="mr-2"
                loading={loading}
                disabled={disabled}
              />
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
