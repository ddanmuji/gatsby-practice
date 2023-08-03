import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-practice`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `gatsby practice`,
  },
  graphqlTypegen: true,
  plugins: [],
};

export default config;
