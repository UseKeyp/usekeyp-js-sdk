import React from 'react';
import { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';
export declare const styles: ({ fontFamily, fontSize, color }: Rsg.Theme) => {
    type: {
        fontFamily: string[];
        fontSize: number;
        color: string;
    };
};
interface TypeProps extends JssInjectedProps {
    children: React.ReactNode;
}
export declare const TypeRenderer: React.FunctionComponent<TypeProps>;
declare const _default: React.ComponentType<Omit<TypeProps, "classes">>;
export default _default;
