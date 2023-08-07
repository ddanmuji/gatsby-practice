import { type HeadFC, type PageProps } from 'gatsby';
import { type FC } from 'react';

import { Layout, Seo } from '../components';

const AboutUsPage: FC<PageProps> = () => {
  return <Layout>AboutUs Page</Layout>;
};

export default AboutUsPage;

export const Head: HeadFC = () => <Seo title="AboutUs Page" />;
