
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { ProductsType } from '../../../libs/enum/labels-enum';
import { ProductSection } from '../../utils/products-section/ProductSection';
import { NewArrivalsData } from './newArrivalsData';

export const NewArrivals = () => {
  return (
    <ProductSection
      to={`${AppRoute.CATALOG}?filter=new`}
      data={NewArrivalsData}
      productType={ProductsType.NEW}
      title="New arrivals"
      text="Fresh arrivals to elevate your home."
      indexTextSection={12}
    />
  );
};
