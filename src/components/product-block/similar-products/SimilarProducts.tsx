import { SimilarProductsList } from './similar-products-list/SimilarProductList';
import { products } from './SimilarProductData';
import s from './similarProducts.module.scss';

export const SimilarProducts = () => {
  return (
    <div className={s.similar}>
      <h4 className={s.title}>Similar products</h4>
      <SimilarProductsList products={products} />
    </div>
  );
};
