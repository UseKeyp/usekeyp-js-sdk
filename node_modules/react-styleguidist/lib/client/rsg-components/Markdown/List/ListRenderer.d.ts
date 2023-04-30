import React from 'react';
import { JssInjectedProps } from 'rsg-components/Styled';
interface ListProps extends JssInjectedProps {
    ordered?: boolean;
    children: React.ReactNode;
}
export declare const ListRenderer: React.FunctionComponent<ListProps>;
declare const _default: React.ComponentType<Omit<ListProps, "classes">>;
export default _default;
