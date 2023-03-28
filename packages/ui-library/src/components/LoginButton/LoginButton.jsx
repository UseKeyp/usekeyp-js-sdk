import Button from "../Button/Button";
import Icon from "../Icon/Icon";

/*

common: border, padding, font size, font props
different: background color, text color, icons, icons colors

take provider and depending on a provider give button and icon props: background color, 
*/

const LoginButton = ({ provider }) => {
  const colorVariants = {
    discord: "hover:bg-[#5865F2]",
    twitter: "hover:bg-[#1DA1F2]",
    google: "hover:bg-[#4285F4]",
  };
  return (
    <div className="mb-4">
      <Button
        size="regular"
        fluid={true}
        classNameVariant={`justify-start bg-[white]  hover:text-white 
        ${provider === "discord" && colorVariants.discord}
        ${provider === "twitter" && colorVariants.twitter}
        ${provider === "google" && colorVariants.google}
        `}
        borderColor="#E9EBED"
        textColor="text-[#80858E]"
      >
        <div className="flex">
          <div className="mr-4 ml-2">
            <Icon name={provider}></Icon>
          </div>
          <div className=" leading-[130%] text-base font-normal capitalize">
            {provider}
          </div>
        </div>
      </Button>
    </div>
  );
};

export default LoginButton;
