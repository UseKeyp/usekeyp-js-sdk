import LoginButton from "../LoginButton/LoginButton";
import LoginFrame from "../LoginFrame/LoginFrame";

const LoginPortal = ({ providers }) => {
  return (
    <LoginFrame>
      {providers.map((provider) => {
        return <LoginButton provider={provider} key={provider}></LoginButton>;
      })}
    </LoginFrame>
  );
};

export default LoginPortal;
