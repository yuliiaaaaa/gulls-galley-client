
import { FiltersProductType } from '../../../libs/enum/Filters';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { ProductSection } from '../../utils/products-section/ProductSection';
import { NewArrivalsData } from './newArrivalsData';

export const NewArrivals = () => {
  return (
    <ProductSection
      to={`${AppRoute.CATALOG}?filter=new`}
      data={NewArrivalsData}
      productType={FiltersProductType.NEW}
      title="New arrivals"
      text="Fresh arrivals to elevate your home."
      indexTextSection={12}
    />
  );
};
