import { ProductLabel } from '../../components/utils/label/ProductLabel';
import { ProductLabels, ProductsType } from '../enum/labels-enum';

export const getProductLabel = (productType: string | undefined, className: string) => {
  switch (productType) {
    case ProductsType.BEST_SELLERS:
      return <ProductLabel src={ProductLabels.BEST_SELLERS} className={className} alt="label" />;
    case ProductsType.NEW:
      return <ProductLabel src={ProductLabels.NEW} className={className} alt="label" />;
    case ProductsType.SALE:
      return <ProductLabel src={ProductLabels.SALE} className={className} alt="label" />;
  }
};
