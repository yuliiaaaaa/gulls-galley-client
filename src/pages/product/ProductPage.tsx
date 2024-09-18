import { useParams } from 'react-router';
import { Review } from '../../components/product-block/customers-reviews/Review';
import s from './productPage.module.scss';
import { SimilarProducts } from '../../components/product-block/similar-products/SimilarProducts';
import { ProductsPicture } from '../../components/product-block/product-pictures/ProductsPictures';
import { ProductsDescription } from '../../components/product-block/ProductDescription';

export const ProductPage = () => {
  const { id } = useParams();
  return (
    <div className={`${s.productPage} ${s.container}`}>
      <h1>Product #{id}</h1>
      <ProductsDescription/>
      <div className={s.products__similar}>
        <SimilarProducts />
      </div>
      <Review />
    </div>
  );
};
