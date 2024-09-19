import { FiltersProductType } from '../../../libs/enum/Filters';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { ProductSection } from '../../utils/products-section/ProductSection';
import { SalesData } from './SalesData';

export const SalesSection = () => {
  return (
    <ProductSection
      to={`${AppRoute.CATALOG}?filter=sale`}
      data={SalesData}
      productType={[FiltersProductType.SALE]}
      title="Sales"
      text="Explore Our Full Collection"
      indexTextSection={21}
    />
  );
};
