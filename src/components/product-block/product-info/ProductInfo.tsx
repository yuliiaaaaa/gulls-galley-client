import { useState } from 'react';
import {
  useAddProductToFavoritesMutation,
  useGetProductBySlugQuery,
  useRemoveFavoritesProductMutation,
} from '../../../redux/products/productsApi';
import { Button } from '../../utils/button/Button';
import SvgIcon from '../../utils/svg-icon/SvgIcon';
import { StarRate } from '../star-rate/StarRate';
import s from './productInfo.module.scss';
import { ProductPrice } from '../../utils/product-price/ProductPrice';
import { getProductType } from '../../../libs/helpers/getProductType';
import { Product } from '../../../libs/types/products/Product';
import { useFavoriteToggle } from '../../../libs/hooks/useFavoriteToggle';
import { useAddItemToCartMutation } from '../../../redux/cart/cartApi';

type Props = {
  slug: string;
};

export const ProductInfo: React.FC<Props> = ({ slug }) => {
  const { data: product, isLoading, refetch, isSuccess } = useGetProductBySlugQuery(slug);
  const [addToCart] = useAddItemToCartMutation();
  const { favoriteStatus, isAdding, isRemoving, handleAddToFavorites, error } = useFavoriteToggle(slug);

  const [count, setCount] = useState(1);
  const handlePlusCount = () => {
    setCount((prev) => prev + 1);
  };
  const handleMinusCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!product) return;

    const cartItem = {
      product_id: product.id,
      quantity: count,
      variation_id: null,
    };

    console.log('Adding to cart:', cartItem);

    addToCart(cartItem)
      .unwrap()
      .then(() => {
        console.log('Item added to cart');
      })
      .catch((err) => {
        console.error('Failed to add item to cart:', err);
      });
  };

  return (
    <div className={s.productInfo}>
      {isSuccess && product && (
        <>
          <div className={s.productInfo__header}>
            <div className={s.productInfo__fav}>
              <h3 className={s.productInfo__title}>{product?.name}</h3>
              <SvgIcon
                width={40}
                height={25}
                id={favoriteStatus ? 'heart-filled' : 'heart'}
                color="#19191B"
                className={s.productInfo__icon}
                onClick={() => handleAddToFavorites(product.id)}
              />
            </div>

            <p className={s.productInfo__shorDescription}>{product?.short_description}</p>

            <div className={s.productInfo__rate}>
              <StarRate rating={4.5} />
              <p className={s.productInfo__reviews}>16 reviews</p>
            </div>
          </div>

          <div className={s.productInfo__countPrice}>
            <ProductPrice
              productType={getProductType(product)}
              originalPrice={product.price}
              discountedPrice={product.discounted_price}
              customStyles={{
                container: s.productInfo__price_block,
                discountedPrice: s.productInfo__price_discount,
                originalPrice: s.productInfo__price,
                discountStyle: s.productInfo__price_discount_style,
              }}
            />

            <div className={s.productInfo__count}>
              <p className={s.productInfo__quantity}>Quantity</p>
              <div className={s.productInfo__quantity_buttons}>
                <Button
                  className={s.productInfo__button_minus}
                  onClick={handleMinusCount}
                  isDisabled={count <= 1}
                  title="-"
                />
                <p className={s.productInfo__count_text}>{count}</p>
                <Button className={s.productInfo__button_plus} onClick={handlePlusCount} isDisabled={false} title="+" />
              </div>
            </div>
          </div>

          <div className={s.productInfo__buttons}>
            <Button
              className={s.productInfo__button_add}
              isDisabled={false}
              onClick={handleAddToCart}
              title="Add to cart"
            />
            <Button className={s.productInfo__button_buy} isDisabled={false} title="Buy now" />
          </div>

          <div className={s.productInfo__description}>
            {product?.short_description && (
              <p className={s.productInfo__description_material}>{`MATERIAL:  ${product.short_description}`}</p>
            )}
            <p className={s.productInfo__description_text}>{product?.description}</p>
          </div>
        </>
      )}
    </div>
  );
};
