import { useState } from 'react';
import { useGetProductByIdQuery } from '../../../redux/products/productsApi';
import { Button } from '../../utils/button/Button';
import SvgIcon from '../../utils/svg-icon/SvgIcon';
import { StarRate } from '../star-rate/StarRate';
import s from './productInfo.module.scss';

type Props = {
  id: number;
};

export const ProductInfo: React.FC<Props> = ({ id }) => {
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);
  const [count, setCount] = useState(1);
  const handlePlusCount = () => {
    setCount((prev) => prev + 1);
  };
  const handleMinusCount = () => {
    setCount((prev) => prev - 1);
  };

  const handleAddToFavorites=()=>{
    
  }

  return (
    <div className={s.productInfo}>
      <div className={s.productInfo__header}>
        <div className={s.productInfo__fav}>
          <h3 className={s.productInfo__title}>{product?.name}</h3>
          <SvgIcon width={20} height={18} id="heart" color="#19191B" className={s.productInfo__icon} />
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
            <Button className={s.productInfo__button_minus} onClick={handleMinusCount} isDisabled={count <= 1} title="-" />
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
