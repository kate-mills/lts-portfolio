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
        start_url: `/`,
        icon: `src/images/icon-dark.png`,
        theme_color: `#ffffff`,
        display: `standalone`
      }
    }
  ],
  siteMetadata: {
    title: 'Kate Mills Portfolio',
    siteUrl
  }
}
