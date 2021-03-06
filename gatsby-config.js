module.exports = {
  siteMetadata: {
    title: `Danielė Krauze`,
    description: `...`,
    author: `Danielė Krauze`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        pathToStylesProvider: `src/styles/Provider`
      }
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "krauze"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-krauze`,
        short_name: `krauze`,
        start_url: `/`,
        icons: [],
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
