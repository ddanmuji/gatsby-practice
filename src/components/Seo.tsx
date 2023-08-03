import { FC } from 'react';

interface SeoProps {
  title: string;
}

const Seo: FC<SeoProps> = ({ title }) => {
  return <title>{title}</title>;
};

export default Seo;
