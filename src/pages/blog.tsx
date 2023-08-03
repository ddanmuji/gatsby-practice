import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { FC } from 'react';

import { Layout, Seo } from '../components';

const BlogPage: FC<PageProps<Queries.BlogPostsQuery>> = ({ data }) => {
  return (
    <Layout>
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <h3>{file.frontmatter?.title}</h3>
            <h5>{file.frontmatter?.category}</h5>
            <h6>{file.frontmatter?.date}</h6>
            <hr />
            <p>{file.excerpt}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          title
          category
          date(formatString: "YYYY.MM.DD")
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="Blog Page" />;
