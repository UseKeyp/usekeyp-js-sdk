import React from 'react';
import { JssInjectedProps } from 'rsg-components/Styled';
interface ReactComponentRendererProps extends JssInjectedProps {
    name: string;
    heading: React.ReactNode;
    filepath?: string;
    slug?: string;
    pathLine?: string;
    tabButtons?: React.ReactNode;
    tabBody?: React.ReactNode;
    description?: React.ReactNode;
    docs?: React.ReactNode;
    examples?: React.ReactNode;
    isolated?: boolean;
}
export declare const ReactComponentRenderer: React.FunctionComponent<ReactComponentRendererProps>;
declare const _default: React.ComponentType<Omit<ReactComponentRendererProps, "classes">>;
export default _default;
