import React from 'react';
import { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';
export declare const styles: ({ space }: Rsg.Theme) => {
    block: {
        marginBottom: number;
    };
};
export interface ArgumentProps {
    name?: string;
    type?: any;
    default?: string;
    description?: string;
    returns?: boolean;
    block?: boolean;
}
declare type ArgumentPropsWithClasses = ArgumentProps & JssInjectedProps;
export declare const ArgumentRenderer: React.FunctionComponent<ArgumentPropsWithClasses>;
declare const _default: React.ComponentType<Omit<ArgumentPropsWithClasses, "classes">>;
export default _default;
