import { MinimalProduct } from '../../../../libs/types/products/Product';
import { SimilarProductCard } from '../similar-products-card/SimilarProductCard';
import s from './similarProductList.module.scss';

type Props = {
  products: MinimalProduct[];
};

export const SimilarProductsList: React.FC<Props> = ({ products }) => {
  return (
    <div className={s.list}>
      {products.map((product) => (
        <SimilarProductCard product={product} />
      ))}
    </div>
  );
};
