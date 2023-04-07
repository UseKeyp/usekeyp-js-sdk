import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const colorVariants = {
  discord: {
    hover: "hover:bg-brand-discord",
    active: "bg-brand-discord",
    borderColor: "border-brand-discord",
    hoverBorder: "hover:border-brand-discord",
  },
  twitter: {
    hover: "hover:bg-brand-twitter",
    active: "bg-brand-twitter",
    borderColor: "border-brand-twitter",
    hoverBorder: "hover:border-brand-twitter",
  },
  google: {
    hover: "hover:bg-brand-google",
    active: "bg-brand-google",
    borderColor: "border-brand-google",
    hoverBorder: "hover:border-brand-google",
  },
  apple: {
    hover: "hover:bg-black",
    active: "bg-black",
    borderColor: "border-black",
    hoverBorder: "hover:border-black",
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
          classNameVariant={`justify-center ${loading ? activeBg : ""} ${
            !disabled && hoverBg
          }`}
          borderColor={`${loading ? borderColor : "border-gray-200"} ${
            !loading && !disabled && hoverBorder
          }`}
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
          borderColor={`${loading ? borderColor : "border-gray-200"} ${
            !loading && !disabled && hoverBorder
          }`}
          textColor={`
          ${loading && "text-white"} 
          ${!loading && disabled && "text-gray-800"}
          ${!loading && !disabled && "text-gray-1200"}
          ${!disabled && "hover:text-white"}`}
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
