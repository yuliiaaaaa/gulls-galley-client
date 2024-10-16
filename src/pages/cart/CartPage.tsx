import { useEffect, useState } from 'react';
import { CartList } from '../../components/cart/cart-list/CartList';
import { Button } from '../../components/utils/button/Button';
import SvgIcon from '../../components/utils/svg-icon/SvgIcon';
import { useGetCartQuery } from '../../redux/cart/cartApi';
import s from './CartPage.module.scss';
import { CartItem } from '../../libs/types/Cart';

type Props = {
  isCartOpen: boolean;
  onClick: () => void;
};

export const CartPage: React.FC<Props> = ({ isCartOpen, onClick }) => {
  const { data: cart, isLoading, isSuccess } = useGetCartQuery();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (cart?.items) {
      setCartItems(cart.items);
    }
  }, [cart]);

  return (
    <div className={s.cart}>
      <div className={s.cart__body}>
        <section className={s.container}>
          <div className={s.cart__header}>
            <p className={s.cart__title}>Your Cart</p>
            <SvgIcon id="close" onClick={onClick} className={s.cart__close} />
          </div>
          {!(cartItems.length > 0) && !isLoading && (
            <>
              <p className={s.cart__empty_title}>Your shopping cart is empty.</p>

              <Button className={s.cart__empty_button} isDisabled={false} title="Continue shopping" onClick={onClick} />
            </>
          )}

          {isLoading && <p>Loading your cart items...</p>}
          {!isLoading && cartItems.length > 0 && (
            <div className={s.cart__content}>
              <CartList items={cartItems} setCartItems={setCartItems} />
              <div className={s.cart__buttom}>
                <div className={s.cart__price}>
                  <h1 className={s.cart__price_text}>Total</h1>
                  <p className={s.cart__price_sum}>{`${cart?.total_price} €`}</p>
                </div>

                <Button className={s.cart__checkout} isDisabled={false} title="Checkout" />
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
