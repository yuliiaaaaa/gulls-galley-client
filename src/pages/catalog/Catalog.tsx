import { CatalogHeader } from '../../components/catalog/catalog-header/CatalogHeader';
import { BreadCrumbs } from '../../components/utils/breadcrumbs/BreadCrumbs';
import s from './catalog.module.scss';

export const Catalog = () => {
  return (
    <div className={`${s.catalog} ${s.container}`}>
      <div className={s.breadcrumbs__container}>
        <BreadCrumbs />
      </div>
      <div className={s.catalog__header}>
        <CatalogHeader />
      </div>
    </div>
  );
};
