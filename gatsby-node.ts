import type { GatsbyNode } from 'gatsby';

type OnCreateBabelConfig = GatsbyNode['onCreateBabelConfig'];

export const onCreateBabelConfig: OnCreateBabelConfig = ({ actions }) => {
  const { setBabelPlugin } = actions;

  setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  });
};
