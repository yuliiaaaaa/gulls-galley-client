import { Product } from '../../../libs/types/Product';
import { ItemCard } from '../../utils/ItemCard.tsx/ItemCard';
import s from './catalogList.module.scss';

type Props = {
  products: Product[];
};
export const CatalogList: React.FC<Props> = ({ products }) => {
  return (
    <div className={s.ctalogList}>
      {products.map((product) => (
        <ItemCard key={product.id} item={product} />
      ))}
      ;
    </div>
  );
};
