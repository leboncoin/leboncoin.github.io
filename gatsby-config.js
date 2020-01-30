require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'leboncoin Engineering',
    description: 'Creative engineers and data scientists building a French virtual Flea Market for everyone.',
    keywords: 'leboncoin, marketplace, technologies, devops, data, golang, react, postgres',
    menu: [{
        title: "Blog",
        link: "#blog"
      },
      {
        title: "Videos",
        link: "#youtube"
      },
      {
        title: "Projects",
        link: "#projects"
      },
      {
        title: "Events",
        link: "https://www.welcometothejungle.co/companies/leboncoin/meetings",
        target: "_blank"
      },
      {
        title: "Careers",
        link: "https://leboncoingroupe.com/rejoignez-nous/",
        target: "_blank"
      }
    ],
  },
  pathPrefix: "/",
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
        name: 'leboncoin tech',
        short_name: 'leboncoin tech',
        start_url: '/',
        background_color: '#F56B2A',
        theme_color: '#F56B2A',
        display: 'fullscreen',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-medium-feed',
      options: {
        userName: 'leboncoin-engineering-blog',
        name: 'MediumFeed',
      },
    },
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['UCZy9sdQo0rfO9Qk62P2_8IQ'],
        apiKey: process.env.YOUTUBE_TOKEN,
        maxVideos: 50
      },
    },
  ],
}