const ProductLabels = {
  SALE: '/product-labels/sale-label.png',
  NEW: '/product-labels/new-label.png',
  BEST_SELLERS: '/product-labels/best-sellers-label.svg',
} as const;

const ProductsType = {
  SALE: 'sale',
  NEW: 'new',
  BEST_SELLERS: 'best-sellers',
} as const;

export { ProductLabels, ProductsType };
