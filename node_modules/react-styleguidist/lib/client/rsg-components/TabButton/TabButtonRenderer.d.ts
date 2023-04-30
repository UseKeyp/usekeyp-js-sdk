import React from 'react';
import { JssInjectedProps } from 'rsg-components/Styled';
import { Styles } from 'jss';
import * as Rsg from '../../../typings';
export declare const styles: ({ space, color, fontFamily, fontSize, buttonTextTransform, }: Rsg.Theme) => Styles;
interface TabButtonProps extends JssInjectedProps {
    className?: string;
    name: string;
    onClick: (e: React.MouseEvent) => void;
    active?: boolean;
    children: React.ReactNode;
}
export declare const TabButtonRenderer: React.FunctionComponent<TabButtonProps>;
declare const _default: React.ComponentType<Omit<TabButtonProps, "classes">>;
export default _default;
