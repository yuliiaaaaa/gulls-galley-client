import { FiltersProductType } from '../enum/Filters';
import { Product } from '../types/Product';

export const getTrueProperties = (product: Product): (keyof Product)[] => {
  const trueProperties: (keyof Product)[] = [];

  for (const key in product) {
    if (
      Object.prototype.hasOwnProperty.call(product, key) &&
      typeof product[key as keyof Product] === 'boolean' &&
      product[key as keyof Product]
    ) {
      trueProperties.push(key as keyof Product);
    }
  }

  return trueProperties;
};

export const getSpecifiedTrueProperties = (product: Product): string[] => {
  const specifiedKeys: (keyof Product)[] = [
    FiltersProductType.BEST_SELLERS,
    FiltersProductType.NEW,
    FiltersProductType.SALE,
  ];
  const trueProperties: string[] = [];

  specifiedKeys.forEach((key) => {
    if (product[key]) {
      trueProperties.push(key);
    }
  });

  return trueProperties;
};
