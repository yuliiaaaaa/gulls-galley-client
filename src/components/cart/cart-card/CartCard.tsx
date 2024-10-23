import { useState } from 'react';
import { getProductType } from '../../../libs/helpers/getProductType';
import { Button } from '../../utils/button/Button';
import { ProductPrice } from '../../utils/product-price/ProductPrice';
import s from './CartCard.module.scss';
import { CartItem } from '../../../libs/types/Cart';
import {
  useGetCartQuery,
  useRemoveItemFromCartMutation,
  useUpdateCartItemQuantityMutation,
} from '../../../redux/cart/cartApi';

type Props = {
  item: CartItem;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  cartItems: CartItem[];
};

export const Cartcard: React.FC<Props> = ({ item, setCartItems, cartItems }) => {
  const [count, setCount] = useState(item.quantity);
  const [prevCount, setPrevCount] = useState(item.quantity);
  const [removeItemFromCart] = useRemoveItemFromCartMutation();
  const { refetch } = useGetCartQuery();
  const [updateCartItemQuantity] = useUpdateCartItemQuantityMutation();

  const updateItemQuantity = async (itemId: number, quantity: number) => {
    setPrevCount(count);
    try {
      await updateCartItemQuantity({
        item_id: itemId,
        quantity,
      }).unwrap();
      refetch();
    } catch (error) {
      console.error('Error updating item quantity:', error);
      setCount(prevCount);
    }
  };

  const handlePlusCount = async () => {
    setCount((prev) => prev + 1);
    await updateItemQuantity(item.id, count + 1);
  };

  const handleMinusCount = async () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
      await updateItemQuantity(item.id, count - 1);
    }
  };

  const handleRemoveItem = async () => {
    const prevCartItems = [...cartItems];
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
    try {
      await removeItemFromCart(item.id).unwrap();
      refetch();
    } catch (error) {
      console.error('Error removing item:', error);
      setCartItems(prevCartItems);
    }
  };

  return (
    <div className={s.card}>
      <div className={s.img__wrapper}>
        <img className={s.img} src={item.product.main_image_url} />
      </div>

      <div className={s.card__left}>
        <div className={s.card__header}>
          <p className={s.card__title}>{item.product.name}</p>
          <Button className={s.btn} isDisabled={false} title="Remove" onClick={handleRemoveItem} />
        </div>

        <div className={s.card__buttom}>
          <div className={s.card__quantity_buttons}>
            <Button className={s.card__button_minus} onClick={handleMinusCount} isDisabled={count <= 1} title="-" />
            <p className={s.card__count_text}>{count}</p>
            <Button className={s.card__button_plus} onClick={handlePlusCount} isDisabled={false} title="+" />
          </div>

          <ProductPrice
            productType={getProductType(item.product) || []}
            originalPrice={item.product.price}
            discountedPrice={item.product.discounted_price}
            customStyles={{
              container: s.card__price_block,
              discountedPrice: s.card__price_discount,
              originalPrice: s.card__price,
              discountStyle: s.card__price_discount_style,
            }}
          />
        </div>
      </div>
    </div>
  );
};
function updateItemQuantity(id: number, arg1: number) {
  throw new Error('Function not implemented.');
}
