/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require("path");

const metadata = {
    title: "Terence Chong | Software Developer",
    description: "Portfolio of Terence Chong – a software engineer with strong interests in web development and computer graphics.",
    author: "Terence Chong",
    themeColor: "#44318d"
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
                path: path.join(__dirname, "src", "images"),
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "content",
                path: path.join(__dirname, "src", "content"),
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
                start_url: "/",
                background_color: metadata.themeColor,
                theme_color: metadata.themeColor,
                display: "minimal-ui",
                icon: "src/images/icon.png", // This path is relative to the root of the site.
                // An optional attribute which provides support for CORS check.
                // If you do not provide a crossOrigin option, it will skip CORS for manifest.
                // Any invalid keyword or empty string defaults to `anonymous`
                crossOrigin: `use-credentials`
            }
        }
    ]
};
