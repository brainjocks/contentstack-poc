/*
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

console.log(`Using environment config: '${process.env.NODE_ENV}'`)

require('dotenv').config({
  path: '.env.${process.env.NODE_ENV}',
})

module.exports = {
  siteMetadata: {
    title: 'Brainjocks.com + Contentstack',
    siteUrl: `https://brainjocks-com.netlify.com/`
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://brainjocks-com.netlify.com/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Brainjocks.com using Contentstack',
        short_name: 'BJ',
        description:
          'At Brainjocks, we create digital innovations that deliver engaging experiences through technology to enable and empower business.',
        start_url: '/',
        icon: 'src/img/apple-touch-icon.png',
      },
    },
    {
      resolve: 'gatsby-source-contentstack',
      options: {
        api_key: process.env.CONTENTSTACK_API_KEY,
        delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
        environment: process.env.CONTENTSTACK_ENVIRONMENT,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `400i`, `700`, `700i`],
          },
          {
            family: `Barlow+Condensed`,
            variants: [`400`, `600`, `700`],
          },
        ],
      },
    },
  ],
}
