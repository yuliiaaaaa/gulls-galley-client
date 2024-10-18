import { FC } from 'react';

type Props = {
  src: string;
  className?: string;
  alt: string;
};

export const ProductLabel: FC<Props> = ({ src, className, alt }) => {
  return <img src={src} className={className} alt={alt} />;
};
