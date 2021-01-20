const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  siteMetadata: {
    title: "Audio core",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
  ],
};
