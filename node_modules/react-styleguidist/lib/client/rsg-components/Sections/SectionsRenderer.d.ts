import React from 'react';
import { JssInjectedProps } from 'rsg-components/Styled';
interface SectionsRendererProps extends JssInjectedProps {
    children: React.ReactNode;
}
export declare const SectionsRenderer: React.FunctionComponent<SectionsRendererProps>;
declare const _default: React.ComponentType<Omit<SectionsRendererProps, "classes">>;
export default _default;
