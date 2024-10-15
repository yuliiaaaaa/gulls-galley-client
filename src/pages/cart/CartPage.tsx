import { CartList } from '../../components/cart/cart-list/CartList';
import { Button } from '../../components/utils/button/Button';
import SvgIcon from '../../components/utils/svg-icon/SvgIcon';
import { useGetCartQuery } from '../../redux/cart/cartApi';
import s from './CartPage.module.scss';

type Props = {
  isCartOpen: boolean;
  onClick: () => void;
};

export const CartPage: React.FC<Props> = ({ isCartOpen, onClick }) => {
  const { data: cart, isLoading, isSuccess } = useGetCartQuery();
  const cartItems = cart?.items || [];
  console.log(cartItems)

  return (
    <div className={s.cart}>
      <div className={s.cart__body}>
        <section className={s.container}>
          {!(cartItems.length > 0) && (
            <>
              <div className={s.cart__header}>
                <p className={s.cart__title}>Your Cart</p>
                <SvgIcon id="close" onClick={onClick} className={s.cart__close} />
              </div>

              <p className={s.cart__empty_title}>Your shopping cart is empty.</p>

              <Button className={s.cart__empty_button} isDisabled={false} title="Continue shopping" onClick={onClick} />
            </>
          )}

          <CartList items={cartItems} />
        </section>
      </div>
    </div>
  );
};
