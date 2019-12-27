/*
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

console.log(`Using environment config: '${process.env.NODE_ENV}'`);

require('dotenv').config({
  path: '.env.${process.env.NODE_ENV}'
})

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
    // {
    //   resolve: "gatsby-source-contentstack",
    //   options:{
    //     'api_key': process.env.CONTENTSTACK_API_KEY,
    //     'delivery_token': process.env.CONTENTSTACK_DELIVERY_TOKEN,
    //     'environment': process.env.CONTENTSTACK_ENVIRONMENT
    //   },
    // },
    // 'gatsby-plugin-offline'
  ],
}
