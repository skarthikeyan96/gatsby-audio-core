module.exports = {
  siteMetadata: {
    title: "Audio core",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "",
        spaceId: "",
      },
    },
  ],
};
