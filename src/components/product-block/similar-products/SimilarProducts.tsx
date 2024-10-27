import { useGetRelatedProductsQuery } from '../../../redux/products/productsApi';
import { SimilarProductsList } from './similar-products-list/SimilarProductList';
import s from './similarProducts.module.scss';

type Props = {
  slug: string;
};

export const SimilarProducts: React.FC<Props> = ({ slug }) => {
  const { data: similarProduct } = useGetRelatedProductsQuery({ slug });

  return (
    <div className={s.similar}>
      <h4 className={s.title}>Similar products</h4>
      {!!similarProduct?.length && <SimilarProductsList products={similarProduct} />}
    </div>
  );
};
