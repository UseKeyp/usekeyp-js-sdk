import { useState } from "react";
import LoginButton from "../LoginButton/LoginButton";
import LoginFrame from "../LoginFrame/LoginFrame";
import { MoreAccordion } from "../MoreAccordion/MoreAccordion";

const LoginPortal = ({ providers, additionalProviders, onClick }) => {
  const [loading, setLoading] = useState({});
  const [disabled, setDisabled] = useState(false);

  const handleClick = (provider) => {
    setLoading({ [provider]: true });
    setDisabled(true);
    onClick(provider);
  };

  return (
    <LoginFrame>
      {providers.map((provider) => (
        <LoginButton
          provider={provider}
          key={provider}
          onLogin={() => handleClick(provider)}
          loading={loading[provider]}
          disabled={disabled}
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
                    onLogin={() => handleClick(provider)}
                    loading={loading[provider]}
                    disabled={disabled}
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
