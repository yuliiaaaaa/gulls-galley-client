import s from './catalogHeader.module.scss';

export const CatalogHeader = () => {
  return (
    <div className={s.header__images}>
      <img src="public/catalog/sofa.png" className={`${s.header__image} ${s.header__image_sofa}`} alt="sofa" />
      <img src="public/catalog/candles.png" className={`${s.header__image} ${s.header__image_candles}`} alt="candles" />
      <p className={s.header__title}>Catalog</p>
    </div>
  );
};
