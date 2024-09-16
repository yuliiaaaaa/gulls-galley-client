import { ProductLabel } from '../../components/utils/label/ProductLabel';
import { FiltersProductType } from '../enum/Filters';
import { ProductLabels } from '../enum/labels-enum';

export const getProductLabel = (productType: string | undefined, className: string) => {
  switch (productType) {
    case FiltersProductType.BEST_SELLERS:
      return <ProductLabel src={ProductLabels.BEST_SELLERS} className={className} alt="label" />;
    case FiltersProductType.NEW:
      return <ProductLabel src={ProductLabels.NEW} className={className} alt="label" />;
    case FiltersProductType.SALE:
      return <ProductLabel src={ProductLabels.SALE} className={className} alt="label" />;
  }
};
