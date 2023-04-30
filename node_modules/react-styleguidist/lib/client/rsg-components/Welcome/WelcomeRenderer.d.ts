import React from 'react';
import { JssInjectedProps } from 'rsg-components/Styled';
interface WelcomeProps extends JssInjectedProps {
    patterns: string[];
}
export declare const WelcomeRenderer: React.FunctionComponent<WelcomeProps>;
declare const _default: React.ComponentType<Omit<WelcomeProps, "classes">>;
export default _default;
