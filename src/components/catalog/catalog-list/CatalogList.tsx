import { getSpecifiedTrueProperties } from '../../../libs/helpers/getTrueProperties';
import { Product } from '../../../libs/types/products/Product';
import { ItemCard } from '../../utils/ItemCard.tsx/ItemCard';
import s from './catalogList.module.scss';

type Props = {
  products: Product[];
};
export const CatalogList: React.FC<Props> = ({ products }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.list}>
        {products.map((product) => (
          <ItemCard key={product.id} item={product} productType={getSpecifiedTrueProperties(product)} />
        ))}
      </div>
    </div>
  );
};
