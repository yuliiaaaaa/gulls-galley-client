
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { ProductsType } from '../../../libs/enum/labels-enum';
import { ProductSection } from '../../utils/products-section/ProductSection';
import { bestSellersData } from './BestSellersData';

export const BestSellers = () => {

  return (
    <ProductSection
      to={`${AppRoute.CATALOG}?filter=best-sellers`}
      data={bestSellersData}
      productType={ProductsType.BEST_SELLERS}
      title="Best Sellers"
      text="Discover our most loved pieces!"
      indexTextSection={0}
    />
  );
};
