import { ItemsList } from '../items-list/ItemsList';
import { LinkComponent } from '../link/Link';
import s from '../../home/bestSellers/BestSellers.module.scss';
import { useMediaQuery } from '../../../libs/hooks/useMediaQuery';
import { FC } from 'react';
import { Item } from '../../../libs/types/Item';
import { Product } from '../../../libs/types/Product';

type Props = {
  to: string;
  data: Product[];
  productType: string;
  title: string;
  text: string;
  indexTextSection: number;
  id?: string;
};

export const ProductSection: FC<Props> = ({ to, data, productType, title, text, indexTextSection, id }) => {
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1024px)');
  const displayedData = isTablet ? data.slice(0, 8) : data.slice(0, 7);

  return (
    <section className={s.sellers}>
      <div className={`${s.container} ${s.sellers__container}`}>
        <h1 className={s.sellers__title} id={id}>
          {title}
        </h1>

        <div className={s.sellers__list}>
          <ItemsList data={displayedData} indexTextSection={indexTextSection} text={text} productType={productType} />
        </div>
        
        <div className={s.sellers__btn_wrapper}>
          <LinkComponent to={to} className={s.sellers__btn}>
            Show more
          </LinkComponent>
        </div>
      </div>
    </section>
  );
};
