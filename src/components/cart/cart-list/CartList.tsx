import { CartItem } from '../../../libs/types/Cart';
import { Cartcard } from '../cart-card/CartCard';
import s from './CartList.module.scss';

type Props = {
  items: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

export const CartList: React.FC<Props> = ({ items,setCartItems }) => {
  return (
    <div className={s.list}>
      {items.map((item) => (
        <Cartcard key={item.product.id} item={item} setCartItems={setCartItems} cartItems={items}/>
      ))}
    </div>
  );
};
