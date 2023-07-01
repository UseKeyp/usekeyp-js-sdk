import React, { useState } from "react";
import LoginButton from "../LoginButton/LoginButton";
import LoginFrame from "../LoginFrame/LoginFrame";
import { MoreAccordion } from "../MoreAccordion/MoreAccordion";

// bg: transparent or white

const LoginPortal = ({ providers, additionalProviders, onClick, bg, align }) => {
  const [loading, setLoading] = useState({});
  const [disabled, setDisabled] = useState(false);

  const handleClick = (provider) => {
    setLoading({ [provider]: true });
    setDisabled(true);
    onClick(provider);
  };

  return (
    <div className="ui-kit_login-portal">
      <LoginFrame bg={bg} align={align}>
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
    </div>
  );
};

export default LoginPortal;
