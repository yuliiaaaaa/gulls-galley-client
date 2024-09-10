import { AppRoute } from '../../libs/enum/app-route-enum';
import { ProductsType } from '../../libs/enum/labels-enum';
import { ProductSection } from '../utils/products-section/ProductSection';
import { SalesData } from './SalesData';

export const SalesSection = () => {
  return (
    <ProductSection
      to={`${AppRoute.CATALOG}?filter=sale`}
      data={SalesData}
      productType={ProductsType.SALE}
      title="Sales"
      text="Explore Our Full Collection"
      indexTextSection={21}
    />
  );
};
