import React from "react";
import Icon from "../Icon/Icon";

// bg transparent or white

const LoginFrame = ({ children, bg }) => {
  return (
    <div
      className={`ui-kit_login-frame w-[327px] p-6 ${
        bg === "transparent"
          ? "bg-transparent"
          : "bg-white border rounded-[6px] border-gray-200"
      }`}
    >
      <div className="ui-kit_login-title flex font-normal text-base text-gray-1600 mb-4">
        Log in with
      </div>
      <div>{children}</div>
      <div className="ui-kit_login-powered-by flex">
        <div className="font-normal text-[9px] text-gray-800 mr-0.5">
          Powered by{" "}
        </div>
        <div className="flex mt-px">
          <Icon
            key="keypnameandlogo"
            name="keypnameandlogo"
            width="35px"
          ></Icon>
        </div>
      </div>
    </div>
  );
};

export default LoginFrame;
