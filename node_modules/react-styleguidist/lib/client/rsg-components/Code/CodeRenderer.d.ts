import React from 'react';
import { JssInjectedProps } from 'rsg-components/Styled';
interface CodeProps extends JssInjectedProps {
    children: React.ReactNode;
}
export declare const CodeRenderer: React.FunctionComponent<CodeProps>;
declare const _default: React.ComponentType<Omit<CodeProps, "classes">>;
export default _default;
