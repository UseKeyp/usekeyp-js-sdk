import { useState } from "react";
import Icon from "../Icon/Icon";

export const MoreAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-[48px] rounded-lg border border-gray-300 w-full">
      <div
        className="flex items-center pt-3 px-3 justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-base text-gray-1200 font-normal">{title}</h2>
        <button className="flex items-center justify-center rounded-full">
          {isOpen ? (
            <Icon key="arrow_up" name="arrow_up" height="8" width="14" />
          ) : (
            <Icon key="arrow_down" name="arrow_down" height="8" width="14" />
          )}
        </button>
      </div>
      {isOpen && <div className="flex pt-4">{children}</div>}
    </div>
  );
};

export default MoreAccordion;
