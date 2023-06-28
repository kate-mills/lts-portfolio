require('dotenv').config()
require('dotenv').config({path: `.env.${process.env.NODE_ENV}`})
const siteUrl = `https://katemillscompany.com/`

module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kate Mills Portfolio`,
        short_name: `kateMills`,
        lang: `en`,
        start_url: `/`,
        icon: `src/images/icon.png`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `browser`
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
  ],
  siteMetadata: {
    title: 'Kate Mills Portfolio',
    siteUrl
  }
}
