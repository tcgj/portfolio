/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const metadata = {
    title: "Terence Chong | Software Developer",
    description: "Portfolio of Terence Chong – a software engineer with strong interests in web development and computer graphics.",
    author: "Terence Chong",
    themeColor: "#5bb6c2"
};

module.exports = {
    pathPrefix: "/portfolio",
    siteMetadata: metadata,
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "content",
                path: `${__dirname}/src/content`,
            }
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                google: {
                    families: ["PT Mono"]
                }
            }
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Terence Chong's Portfolio",
                short_name: "Terence's Site",
                description: metadata.description,
                lang: "en",
                start_url: "/",
                background_color: metadata.themeColor,
                theme_color: metadata.themeColor,
                display: "minimal-ui",
                icon: "src/images/icon.png",
                icon_options: {
                    purpose: "any maskable"
                }
            }
        }
    ]
};
