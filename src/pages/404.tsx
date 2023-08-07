import { type HeadFC, type PageProps } from 'gatsby';
import { type FC } from 'react';

import { Layout, Seo } from '../components';

const NotFoundPage: FC<PageProps> = () => {
  return <Layout>NotFound Page</Layout>;
};

export default NotFoundPage;

export const Head: HeadFC = () => <Seo title="Not found" />;
