import { FiltersProductType } from '../../../libs/enum/Filters';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { useGetProductsQuery } from '../../../redux/products/productsApi';
import { ProductSection } from '../../utils/products-section/ProductSection';

export const NewArrivals = () => {
  const { data, isError, isLoading } = useGetProductsQuery({ is_new: true, limit: 8, offset: 0 });

  const products = data || [];

  return (
    <ProductSection
      to={`${AppRoute.CATALOG}?filter=new`}
      data={products}
      productType={[FiltersProductType.NEW]}
      title="New arrivals"
      text="Fresh arrivals to elevate your home."
      indexTextSection={4}
    />
  );
};
