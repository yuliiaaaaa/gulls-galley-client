import { CartItem } from '../../../libs/types/Cart';
import s from './CartCard.module.scss';

type Props = {
  item: CartItem;
};

export const Cartcard: React.FC<Props> = ({ item }) => {
  return <div className={s.card}>
    
  </div>;
};
