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
import cn from 'classnames';

type Props = {
  slug: string;
};

export const ProductInfo: React.FC<Props> = ({ slug }) => {
  const { data: product, isLoading, error } = useGetProductBySlugQuery(slug);
  const [addProductToFavorites, { isLoading: isAdding, isError: isAddError }] = useAddProductToFavoritesMutation();
  const [removeFavoritesProduct, { isLoading: isRemoving, isError: isRemoveError }] =
    useRemoveFavoritesProductMutation();

  const id = product?.id;

  const [count, setCount] = useState(1);
  const handlePlusCount = () => {
    setCount((prev) => prev + 1);
  };
  const handleMinusCount = () => {
    setCount((prev) => prev - 1);
  };

  const handleAddToFavorites = async (id: number) => {
    try {
      if (product?.is_favorite) {
        await removeFavoritesProduct(id).unwrap();
      } else {
        await addProductToFavorites(id).unwrap();
      }
    } catch (error) {
      console.error('Error updating favorites:', error);
    }
  };
  console.log(product?.is_favorite);

  return (
    <div className={s.productInfo}>
      <div className={s.productInfo__header}>
        <div className={s.productInfo__fav}>
          <h3 className={s.productInfo__title}>{product?.name}</h3>
          <SvgIcon
            width={20}
            height={18}
            id="heart"
            color="#19191B"
            className={cn(s.productInfo__icon, { [s.productInfo__icon_favorite]: product?.is_favorite })}
            onClick={() => handleAddToFavorites(id)}
          />
        </div>

        <p className={s.productInfo__shorDescription}>{product?.short_description}</p>

        <div className={s.productInfo__rate}>
          <StarRate rating={4.5} />
          <p className={s.productInfo__reviews}>16 reviews</p>
        </div>
      </div>

      <div className={s.productInfo__countPrice}>
        <p className={s.productInfo__price}>{`${product?.price} €`}</p>

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
        <Button className={s.productInfo__button_add} isDisabled={false} title="Add to cart" />
        <Button className={s.productInfo__button_buy} isDisabled={false} title="Buy now" />
      </div>

      <div className={s.productInfo__description}>
        <p className={s.productInfo__description_material}>{`MATERIAL:  ${product?.short_description}`}</p>
        <p className={s.productInfo__description_text}>{product?.description}</p>
      </div>
    </div>
  );
};
