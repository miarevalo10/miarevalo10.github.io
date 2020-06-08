module.exports = {
  siteMetadata: {
    title: "María Arévalo",
    description: `María's personal site.`,
    author: "@miarevalo10",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Cabin", "Open Sans"],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "maria-arevalo",
        short_name: "portfolio",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#0091EA",
        display: "minimal-ui",
        icon: "static/en/profilePic.jpg", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
