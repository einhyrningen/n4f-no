module.exports = {
  siteMetadata: {
    title: `Hyperion - Norsk Forbund for Fantastiske Fritidsinteresser`,
    description: `Hyperion er det norske forbundet for alle som liker spill, data, science fiction, fantasy, laiv og alt annet som er fantastisk.Vi har over 150 medlemsforeninger med like i overkant av 16.000 medlemmer totalt.`,
    author: `@einhyrningen`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `hyperion.cdn`,
        accessToken: `MC5YT19xZXhBQUFId3FkX0g3.77-9Gu-_ve-_vV7vv71JNe-_ve-_ve-_ve-_vQFCYVgG77-977-977-977-9KSVRdmgi77-977-9a3oh`,
        lintResolver: () => {}
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {}
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
};
