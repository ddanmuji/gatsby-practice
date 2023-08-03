import type { HeadFC, PageProps } from 'gatsby';
import { FC } from 'react';

import { Layout, Seo } from '../components';

const BlogPage: FC<PageProps> = () => {
  return <Layout>Blog Page</Layout>;
};

export default BlogPage;

export const Head: HeadFC = () => <Seo title="Blog Page" />;
