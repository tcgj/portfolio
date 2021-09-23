import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

type HeadProps = {
    title?: string;
    description?: string;
};

export const Head = ({ title, description }: HeadProps) => {
    const { site } = useStaticQuery(
        graphql`{
            site {
                siteMetadata {
                    title
                    description
                    author
                    themeColor
                }
            }
        }`
    );

    return (
        <Helmet
            title={title}
            titleTemplate={`%s · ${site.siteMetadata.title}`}
            defaultTitle={site.siteMetadata.title}
            htmlAttributes={{
                lang: "en"
            }}
            meta={[
                {
                    name: "description",
                    content: description || site.siteMetadata.description
                },
                {
                    name: "author",
                    content: site.siteMetadata.author
                },
                {
                    name: "theme-color",
                    content: site.siteMetadata.themeColor
                },
                {
                    property: `og:title`,
                    content: title || site.siteMetadata.title
                },
                {
                    property: 'og:description',
                    content: description || site.siteMetadata.description
                },
                {
                    property: `og:type`,
                    content: `website`
                }
                // { // Add in future for embed link thumbnail
                //     property: 'og:image',
                //     content: 'image-url-here',
                // }
            ]}
        />
    );
};
