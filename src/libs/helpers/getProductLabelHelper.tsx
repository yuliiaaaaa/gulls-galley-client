import { ProductLabel } from '../../components/utils/label/ProductLabel';
import { FiltersProductType } from '../enum/Filters';
import { ProductLabels } from '../enum/labels-enum';

export const getProductLabel = (productType: string[] | undefined, className: string) => {
  if (!productType) return null;

  return productType.map((type) => {
    switch (type) {
      case FiltersProductType.BEST_SELLERS:
        return <ProductLabel key={type} src={ProductLabels.BEST_SELLERS} className={className} alt="label" />;
      case FiltersProductType.NEW:
        return <ProductLabel key={type} src={ProductLabels.NEW} className={className} alt="label" />;
      case FiltersProductType.SALE:
        return <ProductLabel key={type} src={ProductLabels.SALE} className={className} alt="label" />;
      default:
        return null;
    }
  });
};
