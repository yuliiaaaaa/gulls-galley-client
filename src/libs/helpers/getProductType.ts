import { FiltersProductType } from '../enum/Filters';
import { Product } from '../types/products/Product';

export const getProductType = (product: Product) => {
  const types = [];
  if (product.is_sale) {
    types.push(FiltersProductType.SALE);
  }
  if (product.is_best) {
    types.push(FiltersProductType.BEST_SELLERS);
  }
  if (product.is_new) {
    types.push(FiltersProductType.NEW);
  }

  return types;
};
