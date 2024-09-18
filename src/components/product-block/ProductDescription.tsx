import { useParams } from 'react-router';
import { ProductsPicture } from './product-pictures/ProductsPictures';
import s from './productsDescription.module.scss';
import { ProductInfo } from './product-info/ProductInfo';

export const ProductsDescription = () => {
  const { id } = useParams();
  console.log('id', id);

  return (
    <div className={s.description}>
      <ProductsPicture id={Number(id)} />
      <ProductInfo id={Number(id)} />
    </div>
  );
};
