import React from 'react';
import { JssInjectedProps } from 'rsg-components/Styled';
interface HeadingProps extends JssInjectedProps, React.HTMLAttributes<HTMLHeadingElement> {
    children?: React.ReactNode;
    level: number;
}
declare const _default: React.ComponentType<Omit<HeadingProps, "classes">>;
export default _default;
