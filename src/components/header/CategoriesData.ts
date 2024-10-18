import { FiltersProductType } from '../../libs/enum/Filters';

export const categoriesData = [
  { id: 1, name: 'ALL', type: FiltersProductType.ALL as string },
  { id: 2, name: 'NEW ARRIVALS', type: FiltersProductType.NEW as string },
  { id: 3, name: 'BEST SELLERS', type: FiltersProductType.BEST_SELLERS  as string},
  { id: 4, name: 'SALES', type: FiltersProductType.SALE as string},
];
