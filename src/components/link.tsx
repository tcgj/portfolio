import * as React from "react";
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby";

// Custom Link typing workaround based on
// https://github.com/gatsbyjs/gatsby/issues/16682#issuecomment-718155902
type LinkProp = Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'>;

export const Link = ({
    to,
    activeClassName,
    partiallyActive,
    children,
    ...rest
}: LinkProp) => {
    const external = !/^\/(?!\/)/.test(to);
    const file = /\.[0-9a-z]+$/i.test(to);
    // Use Gatsby Link for internal links, and <a> for others
    if (external || file) {
        return (
            <a href={to} {...rest}>
                {children}
            </a>
        );
    }

    return (
        <GatsbyLink
            to={to}
            activeClassName={activeClassName}
            partiallyActive={partiallyActive}
            {...rest}
        >
            {children}
        </GatsbyLink>
    );
};
