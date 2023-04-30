export interface NavigateOptions {
    replace?: boolean;
}
declare const gHistory: {
    listen: (listener: (ev?: PopStateEvent) => any) => string;
    navigate: (to: string, options?: NavigateOptions) => void;
    back: () => void;
    remove: (listenerId: string) => void;
};
declare const navigate: (to: string, options?: NavigateOptions) => void, back: () => void;
export { gHistory, navigate, back };
//# sourceMappingURL=history.d.ts.map