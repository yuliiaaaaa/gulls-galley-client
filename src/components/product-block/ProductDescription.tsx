import { useParams } from 'react-router';
import { ProductsPicture } from './product-pictures/ProductsPictures';
import s from './productsDescription.module.scss';
import { ProductInfo } from './product-info/ProductInfo';

export const ProductsDescription = () => {
  const { slug = '' } = useParams();
  console.log('id', slug);

  return (
    <div className={s.description}>
      <ProductsPicture slug={slug} />
      <ProductInfo slug={slug} />
    </div>
  );
};
