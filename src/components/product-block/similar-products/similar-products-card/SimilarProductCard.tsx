import { Link } from 'react-router-dom';
import { MinimalProduct } from '../../../../libs/types/products/Product';
import s from './similarProductCard.module.scss';
import { AppRoute } from '../../../../libs/enum/app-route-enum';

type Props = {
  product: MinimalProduct;
};

export const SimilarProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className={s.card}>
      <Link className={s.card__link} to={`${AppRoute.CATALOG}/${product.slug}`}>
        <div className={s.card__info}>
          <div className={s.card__img_wrapper}>
            <img src={product.main_image_url} className={s.card__img} alt="similar-product" />
          </div>
          <p className={s.card__title}>{product.name}</p>
        </div>
      </Link>
    </div>
  );
};
