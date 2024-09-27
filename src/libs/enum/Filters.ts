import { Product } from '../types/Product';

export const FiltersProductType = {
  BEST_SELLERS: 'is_best' as keyof Product,
  NEW: 'is_new' as keyof Product,
  SALE: 'is_sale' as keyof Product,
  ALL: 'all' as keyof Product,
  PRICE_ASC: 'price',
  PRICE_DESC: '-price',
};
