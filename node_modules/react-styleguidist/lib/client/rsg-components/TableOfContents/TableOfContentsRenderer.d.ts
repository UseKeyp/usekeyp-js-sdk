import React from 'react';
import { JssInjectedProps } from 'rsg-components/Styled';
interface TableOfContentsRendererProps extends JssInjectedProps {
    children?: React.ReactNode;
    searchTerm: string;
    onSearchTermChange(term: string): void;
}
export declare const TableOfContentsRenderer: React.FunctionComponent<TableOfContentsRendererProps>;
declare const _default: React.ComponentType<Omit<TableOfContentsRendererProps, "classes">>;
export default _default;
