import { AppRoute } from '../../libs/enum/app-route-enum';
import { ProductsType } from '../../libs/enum/labels-enum';
import { useMediaQuery } from '../../libs/hooks/useMediaQuery';
import { ItemsList } from '../utils/items-list/ItemsList';
import { LinkComponent } from '../utils/link/Link';
import s from './BestSellers.module.scss';
import { bestSellersData } from './BestSellersData';

export const BestSellers = () => {
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1024px)');
  const displayedData = isTablet ? bestSellersData.slice(0, 8) : bestSellersData.slice(0, 7);

  return (
    <section className={s.sellers}>
      <div className={`${s.container} ${s.sellers__container}`}>
        <h1 className={s.sellers__title}>Best Sellers</h1>
        <div className={s.sellers__list}>
          <ItemsList
            data={displayedData}
            indexTextSection={0}
            text="Discover our most loved pieces!"
            productType={ProductsType.BEST_SELLERS}
          />
        </div>
        <div className={s.sellers__btn_wrapper}>
          <LinkComponent to={`${AppRoute.CATALOG}?filter=best-sellers`} className={s.sellers__btn}>
            Show more
          </LinkComponent>
        </div>
      </div>
    </section>
  );
};
