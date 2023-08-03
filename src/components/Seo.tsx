import { graphql, useStaticQuery } from 'gatsby';
import { FC } from 'react';

interface SeoProps {
  title: string;
}

const Seo: FC<SeoProps> = ({ title }) => {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}
    </title>
  );
};

export default Seo;
