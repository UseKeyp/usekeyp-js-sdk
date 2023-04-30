import React from 'react';
import { JssInjectedProps } from 'rsg-components/Styled';
interface SectionRendererProps extends JssInjectedProps {
    slug: string;
    depth: number;
    name?: string;
    description?: string;
    content?: React.ReactNode;
    components?: React.ReactNode;
    sections?: React.ReactNode;
    isolated?: boolean;
    pagePerSection?: boolean;
    [prop: string]: any;
}
export declare const SectionRenderer: React.FunctionComponent<SectionRendererProps>;
declare const _default: React.ComponentType<Omit<SectionRendererProps, "classes">>;
export default _default;
