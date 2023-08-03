import type { HeadFC, PageProps } from 'gatsby';
import { FC } from 'react';

import { Layout, Seo } from '../components';

const IndexPage: FC<PageProps> = () => {
  return <Layout>Home Page</Layout>;
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home Page" />;
