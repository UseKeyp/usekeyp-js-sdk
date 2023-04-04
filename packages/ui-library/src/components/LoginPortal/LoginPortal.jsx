import LoginButton from "../LoginButton/LoginButton";
import LoginFrame from "../LoginFrame/LoginFrame";
import { MoreAccordion } from "../MoreAccordion/MoreAccordion";

const LoginPortal = ({ providers, additionalProviders, onClick }) => {
  return (
    <LoginFrame>
      {providers.map((provider) => (
        <LoginButton
          provider={provider}
          key={provider}
          onLogin={onClick}
        ></LoginButton>
      ))}
      {additionalProviders && (
        <div className="mb-4">
          <MoreAccordion title="More">
            <div className="flex flex-wrap gap-x-2 pl-3">
              {additionalProviders.map((provider) => {
                return (
                  <LoginButton
                    provider={provider}
                    key={provider}
                    size="square"
                    onLogin={onClick}
                  ></LoginButton>
                );
              })}
            </div>
          </MoreAccordion>
        </div>
      )}
    </LoginFrame>
  );
};

export default LoginPortal;
