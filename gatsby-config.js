module.exports = {
  siteMetadata: {
    title: `Masaya's Blog`,
    description: `A place for writing down and sharing my thoughts. Hopefully you'll find something of use.`,
    author: `Masaya Shida`,
    copyright: `Masaya Shida`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Masaya's Blog`,
        short_name: `Masaya Blog`,
        start_url: `/`,
        background_color: `#193441`,
        theme_color: `#3E606F`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-dark-mode",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`, //tells gatsby to source content from filesystem, which is src dir
      },
    },
    "gatsby-transformer-remark",

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
