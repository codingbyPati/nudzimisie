require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Game`,
    description: `Game Website`,
    author: `Mateusz Szostek`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Game`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/game-icon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `src/images/game-icon.png`,
            sizes: `128x128`,
            type: `image/png`,
            purpose: "any maskable"
          },
          {
            src: `src/images/game-icon144.png`,
            sizes: `144x144`,
            type: `image/png`,
            purpose: "any maskable"
          },
          {
            src: `src/images/game-icon512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: "any maskable"
          },
        ], // Add or remove icon sizes as desired
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve("./src/service-worker.js"),
      },
    },
    `gatsby-plugin-styled-components`,
    
  ],
}
