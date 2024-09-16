import { FC } from 'react';
import { Item } from '../../../libs/types/Item';
import { ItemCard } from '../ItemCard.tsx/ItemCard';
import s from './ItemList.module.scss';
import { Product } from '../../../libs/types/Product';

type Props = {
  data: Product[];
  indexTextSection: number;
  text: string;
  productType?: string | undefined;
};

export const ItemsList: FC<Props> = ({ data, indexTextSection, text, productType }) => {
  return (
    <div className={s.list}>
      {data.map((item) =>
        item.id === indexTextSection ? (
          <>
            <ItemCard key={item.id} item={item} productType={productType} />
            <div className={s.text__container}>
              <p className={s.text}>{text}</p>
            </div>
          </>
        ) : (
          <ItemCard key={item.id} item={item} productType={productType} />
        ),
      )}
    </div>
  );
};
