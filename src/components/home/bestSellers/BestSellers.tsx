import { FiltersProductType } from '../../../libs/enum/Filters';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { useGetProductsQuery } from '../../../redux/products/productsApi';
import { ProductSection } from '../../utils/products-section/ProductSection';

export const BestSellers = () => {
  const { data, isError, isLoading } = useGetProductsQuery({ is_best: true, limit: 8, offset: 0 });

  const products = data || [];

  return (
    <ProductSection
      to={`${AppRoute.CATALOG}?filter=best-sellers`}
      data={products}
      productType={[FiltersProductType.BEST_SELLERS]}
      title="Best Sellers"
      text="Discover our most loved pieces!"
      indexTextSection={0}
      id="best-sellers"
    />
  );
};
