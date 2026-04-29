/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Knoli Blog",
    description:
      "Thoughts on polling, crowd-sourced insights, product updates, and building Knoli.",
    siteUrl: "https://blog.knoli.app",
    author: "Knoli Team",
    twitterHandle: "@knoliapp",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static",
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap",
      },
    },
  ],
};
