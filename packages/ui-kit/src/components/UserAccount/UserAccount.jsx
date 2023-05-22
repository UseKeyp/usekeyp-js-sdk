import {
  getProviderIconFromCurrentUser,
  getStyledUsernameFromCurrentUser,
} from "./helpers.jsx";
import { trimAddress } from "../../helpers.js";
import { useState } from "react";
import { Tooltip } from "../Tooltip/Tooltip";
import Icon from "../Icon/Icon";

const UserAccount = ({ currentUser, logOut }) => {
  const [copySuccess, setCopySuccess] = useState("Click to copy address");

  function handleCopy() {
    navigator.clipboard.writeText(currentUser?.address);
    setCopySuccess("Copied!");
    setTimeout(() => {
      setCopySuccess("Click to copy address");
    }, 2000);
  }

  return (
    <div
      className={`my-auto flex w-full sm:w-auto flex-row items-center justify-between rounded-md border border-gray-300 p-2 ${
        currentUser?.username ? "sm:gap-x-4" : "sm:gap-x-2"
      }`}
    >
      <div className="flex flex-row items-center gap-x-[5px]">
        {getProviderIconFromCurrentUser(currentUser)}
        {getStyledUsernameFromCurrentUser(currentUser) || <></>}
      </div>
      <div className="flex flex-row items-center gap-x-[5px]">
        <div className="text-sm font-normal text-gray-2000">
          {trimAddress(currentUser?.address)}
        </div>
        <button
          className="flex"
          onClick={() => {
            handleCopy();
          }}
        >
          <Tooltip
            id={"wallet-address-" + currentUser?.address}
            delayHideTime={250}
            effect="solid"
            borderColor="#C6CED2"
            bgColor="#eef0f2"
            position="top"
            tooltipChild={<div className="text-gray-2400">{copySuccess}</div>}
          >
            <Icon
              color="fill-blue-1200 hover:fill-blue-1600 h-[12px] w-[10px]"
              name="copy"
              width="12px"
              height="12px"
            />{" "}
          </Tooltip>
        </button>
      </div>
      <button
        className="text-sm font-normal text-gray-1200 hover:text-red-1200"
        onClick={logOut}
      >
        Logout
      </button>
    </div>
  );
};
export default UserAccount;
