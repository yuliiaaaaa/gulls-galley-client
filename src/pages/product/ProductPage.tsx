import { useParams } from 'react-router';
import { Review } from '../../components/product-block/customers-reviews/Review';
import s from './productPage.module.scss';
import { SimilarProducts } from '../../components/product-block/similar-products/SimilarProducts';
import { ProductsDescription } from '../../components/product-block/ProductDescription';
import { BreadCrumbs } from '../../components/utils/breadcrumbs/BreadCrumbs';

export const ProductPage = () => {
  
  return (
    <div className={`${s.productPage} ${s.container}`}>
      <div className={s.productPage__crumbs}>
        <BreadCrumbs />
      </div>
      <ProductsDescription />
      <div className={s.products__similar}>
        <SimilarProducts />
      </div>
      <Review />
    </div>
  );
};
