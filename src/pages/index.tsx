import { type HeadFC, type PageProps } from 'gatsby';
import { type FC } from 'react';

import { Layout, Seo } from '../components';

const IndexPage: FC<PageProps> = () => {
  return <Layout>Home Page</Layout>;
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home Page" />;
