import { FiltersProductType } from '../../../../libs/enum/Filters';

export const SORT_OPTIONS = [
  { label: 'Best Sellers', value: FiltersProductType.BEST_SELLERS },
  { label: 'New Arrivals', value: FiltersProductType.NEW },
  { label: 'Sales', value: FiltersProductType.SALE },
  { label: 'Decreasing Price', value: FiltersProductType.PRICE_DESC },
  { label: 'Increasing Price', value: FiltersProductType.PRICE_ASC },
];
