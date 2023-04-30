import React from 'react';
import { Spec } from './util';
interface Props {
    path: string;
    spec: Spec;
    delay?: number;
    params?: Record<string, string>;
    whileLoadingPage?: () => React.ReactElement | null;
    children?: React.ReactNode;
}
export declare const ActiveRouteLoader: ({ path, spec, delay, params, whileLoadingPage, children, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=active-route-loader.d.ts.map