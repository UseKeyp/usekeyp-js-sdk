import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const LoginButton = ({ provider, size, onClick }) => {
  const colorVariants = {
    discord: "hover:bg-[#5865F2]",
    twitter: "hover:bg-[#1DA1F2]",
    google: "hover:bg-[#4285F4]",
    apple: "hover:bg-black",
    black: "hover:bg-black",
  };

  const getHoverBg = () => {
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
  return (
    <div className="mb-4">
      {size === "square" ? (
        <Button
          size={size}
          onClick={onClick}
          classNameVariant={`justify-center bg-white
          
        ${getHoverBg()}
        `}
          borderColor="border-gray-200"
          textColor="text-gray-1200"
        >
          <div className="flex justify-center">
            <Icon name={provider} />
          </div>
        </Button>
      ) : (
        <Button
          size={size}
          fluid={true}
          onClick={onClick}
          classNameVariant={`justify-start bg-white  hover:text-white 
          ${getHoverBg()}
        `}
          borderColor="border-gray-200"
          textColor="text-gray-1200"
        >
          <div className="flex mr-4 ml-2">
            <div className="mr-2">
              <Icon name={provider} className="mr-2" />
            </div>
            <div className="text-base font-normal capitalize">{provider}</div>
          </div>
        </Button>
      )}
    </div>
  );
};

export default LoginButton;
