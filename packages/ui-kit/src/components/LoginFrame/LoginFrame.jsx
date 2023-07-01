import React from "react";
import Icon from "../Icon/Icon";

const LoginFrame = ({ children, bg, align }) => {
  return (
    <div
      className={`ui-kit_login-frame w-[327px] p-6 ${
        bg === "transparent"
          ? "bg-transparent"
          : "bg-white border rounded-[6px] border-gray-200"
      }`}
    >
      <div
        className={`ui-kit_login-title flex font-normal text-base  mb-4
        ${bg === "transparent" ? "text-white" : "text-gray-1600"}
        ${align === "center" && "flex justify-center"}`}
      >
        Log in with
      </div>
      <div>{children}</div>
      <div
        className={`ui-kit_login-powered-by flex ${
          align === "center" && "flex justify-center"
        }`}
      >
        <div
          className={`font-normal text-[9px] text-gray-800 mr-0.5 
          ${bg === "transparent" ? "text-white" : "text-gray-800"}`}
        >
          Powered by{" "}
        </div>
        <div className="flex mt-px">
          <Icon
            key="keypnameandlogo"
            name="keypnameandlogo"
            width="35px"
            variant={bg === "transparent" ? "white" : "blue"}
          ></Icon>
        </div>
      </div>
    </div>
  );
};

export default LoginFrame;
