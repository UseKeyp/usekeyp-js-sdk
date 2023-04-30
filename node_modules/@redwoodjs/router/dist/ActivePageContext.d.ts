/// <reference types="react" />
import { LocationContextType } from './location';
export declare type LoadingState = 'PRE_SHOW' | 'SHOW_LOADING' | 'DONE';
export declare type LoadingStateRecord = Record<string, {
    specName: string;
    state: LoadingState;
    page: React.ComponentType<unknown>;
    location: LocationContextType;
} | undefined>;
interface ActivePageState {
    loadingState: LoadingStateRecord;
}
export declare const ActivePageContextProvider: import("react").Provider<ActivePageState | undefined>;
export declare const useActivePageContext: () => ActivePageState;
export {};
//# sourceMappingURL=ActivePageContext.d.ts.map