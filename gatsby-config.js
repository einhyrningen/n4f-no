module.exports = {
  siteMetadata: {
    title: 'Hyperion - Norsk Forbund for Fantastiske Fritidsinteresser',
    description:
      'Hyperion er det norske forbundet for alle som liker spill, data, science fiction, fantasy, laiv og alt annet som er fantastisk.Vi har over 150 medlemsforeninger med like i overkant av 16.000 medlemmer totalt.',
    author: '@einhyrningen',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {},
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'demo.wp-api.org',
        protocol: 'https',
        useACF: false,
        concurrentRequests: 50,
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/pages',
          '**/media',
          '**/tags',
          '**/taxonomies',
        ],
      },
    },
  ],
};
