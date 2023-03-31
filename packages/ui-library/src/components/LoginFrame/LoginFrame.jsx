import Icon from "../Icon/Icon";

const LoginFrame = ({ children }) => {
  return (
    <div className="border rounded-[6px] border-gray-200 max-w-[357px] p-6">
      <div className="font-normal text-base text-gray-1600 mb-4">
        Log in with
      </div>
      <div>{children}</div>
      <div className="flex">
        <div className="font-normal text-[9px] text-gray-800 mr-0.5">
          Powered by{" "}
        </div>
        <div className="flex mt-px">
          <Icon
            key="keypnameandlogo"
            name="keypnameandlogo"
            width="35px"
            color="fill-red"
          ></Icon>
        </div>
      </div>
    </div>
  );
};

export default LoginFrame;
