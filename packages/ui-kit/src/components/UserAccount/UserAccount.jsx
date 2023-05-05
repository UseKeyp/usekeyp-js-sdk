import {
  getProviderIconFromCurrentUser,
  getStyledUsernameFromCurrentUser,
} from "./helpers.jsx";
import { useState } from "react";

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
      className={`my-auto flex w-full sm:w-auto flex-row items-center justify-between rounded-md border border-gray-400 p-2 ${
        currentUser?.username ? "sm:gap-x-4" : "sm:gap-x-2"
      }`}
    >
      <div className="flex flex-row items-center gap-x-2">
        {getProviderIconFromCurrentUser(currentUser)}
        {getStyledUsernameFromCurrentUser(currentUser) || <></>}
      </div>

      <button
        className="text-[12px] font-normal text-gray-1200 hover:text-red-1200"
        onClick={logOut}
      >
        Logout
      </button>
    </div>
  );
};
export default UserAccount;
