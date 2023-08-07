import { Link, graphql, type HeadFC, type PageProps } from 'gatsby';
import { type FC } from 'react';

import { Layout, Seo } from '../../components';

const BlogPage: FC<PageProps<Queries.BlogPostsQuery>> = ({ data }) => {
  return (
    <Layout>
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index} style={{ marginBottom: '100px' }}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>{file.frontmatter?.category}</h5>
              <h6>{file.frontmatter?.date}</h6>
              <hr />
              <p>{file.excerpt}</p>
            </Link>
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
          slug
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
