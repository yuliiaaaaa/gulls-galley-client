import { FC } from 'react';
import s from './ItemCard.module.scss';
import { Link } from 'react-router-dom';
import SvgIcon from '../svg-icon/SvgIcon';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { getProductLabel } from '../../../libs/helpers/getProductLabelHelper';;
import { Product } from '../../../libs/types/products/Product';
import { ProductPrice } from '../product-price/ProductPrice';
import { useFavoriteToggle } from '../../../libs/hooks/useFavoriteToggle';

type Props = {
  item: Product;
  productType?: string[] | undefined;
  onRemoveFavorite?: (id: number) => void;
  onSearchBarClose?: (isOpened: boolean) => void;
};

export const ItemCard: FC<Props> = ({ item, productType, onRemoveFavorite ,onSearchBarClose}) => {
  const { id, slug } = item;
  const { favoriteStatus, handleAddToFavorites } = useFavoriteToggle(slug);

  const handleFavoriteClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    handleAddToFavorites(id);
    if (favoriteStatus && onRemoveFavorite) {
      onRemoveFavorite(id);
    }
  };

   const handleCardClick = () => {
     if (onSearchBarClose) {
       onSearchBarClose(false);
     }
   };

  return (
    <div className={s.card} onClick={handleCardClick}>
      <Link to={`${AppRoute.CATALOG}/${item.slug}`} className={s.card__link}>
        <div className={s.card__img_wrapper}>
          <img className={s.card__img} src={item.main_image_url} alt="item" />
          <SvgIcon
            className={s.card__heart}
            id={favoriteStatus ? 'heart-filled' : 'heart'}
            onClick={handleFavoriteClick}
            color={favoriteStatus ? 'black' : 'white'}
          />
          {getProductLabel(productType, s.card__label)}
        </div>

        <p className={s.card__title}>{item.name}</p>
        <p className={s.card__description}>{item.short_description}</p>

        <ProductPrice
          productType={productType || []}
          originalPrice={item.price}
          discountedPrice={item.discounted_price}
          customStyles={{
            container: s.card__price_block,
            discountedPrice: s.card__price_discount,
            originalPrice: s.card__price,
            discountStyle: s.card__price_discount_style,
          }}
        />
      </Link>
    </div>
  );
};
