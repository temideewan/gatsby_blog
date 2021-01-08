module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-googlefonts`,
<<<<<<< HEAD
      options: {
        fonts: [`roboto mono`, `muli\:400,400i,700,700i`],
=======
      options:{
        fonts:[
          `roboto mono`,
          `muli\:400,400i,700,700i`,
        ],
>>>>>>> 0e8f90b6b4abf63b6f09c60527c89a985aa15de9
        display: "swap",
      },
    },
  ],
}
