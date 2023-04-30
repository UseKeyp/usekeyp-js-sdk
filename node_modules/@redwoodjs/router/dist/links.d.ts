/// <reference types="react" />
import { NavigateOptions } from './history';
import { flattenSearchParams } from './util';
declare type FlattenSearchParams = ReturnType<typeof flattenSearchParams>;
declare type UseMatchOptions = {
    searchParams?: FlattenSearchParams;
};
/**
 * Returns true if the given pathname matches the current location.pathname,
 * provide searchParams options to match the current location.search
 *
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * Examples:
 *
 * Match search params key existence
 * const match = useMatch('/about', ['category', 'page'])
 *
 * Match search params key and value
 * const match = useMatch('/items', [{page: 2}, {category: 'book'}])
 *
 * Mix match
 * const match = useMatch('/list', [{page: 2}, 'gtm'])
 *
 */
declare const useMatch: (pathname: string, options?: UseMatchOptions) => {
    match: boolean;
    params?: undefined;
} | {
    match: boolean;
    params: Record<string, unknown>;
};
interface LinkProps {
    to: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
declare const Link: import("react").ForwardRefExoticComponent<LinkProps & import("react").AnchorHTMLAttributes<HTMLAnchorElement> & import("react").RefAttributes<HTMLAnchorElement>>;
interface NavLinkProps {
    to: string;
    activeClassName: string;
    activeMatchParams?: FlattenSearchParams;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
declare const NavLink: import("react").ForwardRefExoticComponent<NavLinkProps & import("react").AnchorHTMLAttributes<HTMLAnchorElement> & import("react").RefAttributes<HTMLAnchorElement>>;
interface RedirectProps {
    /** The path to redirect to */
    to: string;
    options?: NavigateOptions;
}
/**
 * A declarative way to redirect to a route name
 */
declare const Redirect: ({ to, options }: RedirectProps) => null;
export { Link, NavLink, useMatch, Redirect };
//# sourceMappingURL=links.d.ts.map