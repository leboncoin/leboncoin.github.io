require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'leboncoin Engineering',
  },
  pathPrefix: "/leboncoin",
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-leboncoin',
        short_name: 'leboncoin',
        start_url: '/',
        background_color: '#F56B2A',
        theme_color: '#F56B2A',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `leboncoin-engineering-blog`,
        limit: 9,
      },
    },
  ],
}
