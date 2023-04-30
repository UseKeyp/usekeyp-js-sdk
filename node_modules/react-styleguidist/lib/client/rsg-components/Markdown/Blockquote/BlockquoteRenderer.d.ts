import React from 'react';
import { JssInjectedProps } from 'rsg-components/Styled';
interface BlockquoteProps extends JssInjectedProps {
    children: React.ReactNode;
    className?: string;
}
export declare const BlockquoteRenderer: React.FunctionComponent<BlockquoteProps>;
declare const _default: React.ComponentType<Omit<BlockquoteProps, "classes">>;
export default _default;
