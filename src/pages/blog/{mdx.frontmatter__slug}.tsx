import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { type FC } from 'react';

import { Layout, Seo } from '../../components';

const BlogPost: FC<PageProps<Queries.PostDetailQuery>> = ({ data, children }) => {
  console.log(data);
  return <Layout>{children}</Layout>;
};

export default BlogPost;

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        category
        date
        title
        slug
      }
    }
  }
`;

export const Head: HeadFC<Queries.PostDetailQuery> = ({ data }) => (
  <Seo title={data.mdx?.frontmatter?.title || ''} />
);
