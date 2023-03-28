import Button from "../Button/Button";
import Icon from "../Icon/Icon";

/*

common: border, padding, font size, font props
different: background color, text color, icons, icons colors

take provider and depending on a provider give button and icon props: background color, 
*/

const LoginButton = ({ provider }) => {
  /*
    if provider === 'discord' => hover background color is..., hover icon color is...
    if provider === 'twitter'
  */
  const hoverColor = () => {
    if (provider === "discord") {
      return "#5865F2";
    }
  };
  return (
    <div className="mb-4">
      <Button
        size="regular"
        fluid={true}
        classNameVariant={`justify-start bg-[white] hover:bg-[#5865F2] hover:text-white`}
        borderColor="#E9EBED"
      >
        <div className="flex">
          <div className="mr-4 ml-2">
            <Icon name={provider}></Icon>
          </div>
          <div className="text-[#80858E] hover:text-white leading-[130%] text-base font-normal capitalize">
            {provider}
          </div>
        </div>
      </Button>
    </div>
  );
};

export default LoginButton;
