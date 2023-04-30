import React from 'react';
import { JssInjectedProps } from 'rsg-components/Styled';
interface TableCellProps extends JssInjectedProps {
    children: React.ReactNode;
    header?: boolean;
}
export declare const TableCellRenderer: React.FunctionComponent<TableCellProps>;
declare const _default: React.ComponentType<Omit<TableCellProps, "classes">>;
export default _default;
