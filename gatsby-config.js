/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Brainjocks.com + Contentstack',
  },
  plugins: [
    // 'gatsby-plugin-react-helmet',
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'Brainjocks.com using Contentstack',
    //     short_name: 'BJ',
    //     start_url: '/',
    //     icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: 'gatsby-source-contentstack',
      options:{
        'api_key': '',
        'delivery_token': '',
        'environment': 'development'
      },
    },
    // 'gatsby-plugin-offline'
  ],
}
