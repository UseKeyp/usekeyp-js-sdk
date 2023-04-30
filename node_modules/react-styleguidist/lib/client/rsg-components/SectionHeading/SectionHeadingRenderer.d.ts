import React from 'react';
import { JssInjectedProps } from 'rsg-components/Styled';
interface SectionHeadingRendererProps extends JssInjectedProps {
    children?: React.ReactNode;
    toolbar?: React.ReactNode;
    id: string;
    href?: string;
    depth: number;
    deprecated?: boolean;
}
declare const _default: React.ComponentType<Omit<SectionHeadingRendererProps, "classes">>;
export default _default;
