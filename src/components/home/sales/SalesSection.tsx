import { FiltersProductType } from '../../../libs/enum/Filters';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { useGetProductsQuery } from '../../../redux/products/productsApi';
import { ProductSection } from '../../utils/products-section/ProductSection';

export const SalesSection = () => {
  const { data, isError, isLoading } = useGetProductsQuery({ is_sale: true, limit: 8, offset: 0 });
  const products = data || [];

  return (
    <ProductSection
      to={`${AppRoute.CATALOG}?filter=sale`}
      data={products}
      productType={[FiltersProductType.SALE]}
      title="Sales"
      text="Explore Our Full Collection"
      indexTextSection={5}
    />
  );
};
