const AppRoute = {
  ANY: '*',
  ROOT: '/',
  FURNITURE: '/products/furniture',
  OTHER: '/products/other',
  ACCESSORIES: '/products/accessories',
  LIGHTNING: '/products/lighting',
  CATALOG: '/products',
  PRODUCT: '/products/:id',
  EXPLORE: '#best-sellers',
} as const;

export { AppRoute };
