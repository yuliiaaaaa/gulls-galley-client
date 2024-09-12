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
  CONTACTS: '#contacts',
  ABOUT_US: '#about-us',
  ACCOUNT: '/account',
  CART: '/cart',
  FAVORITES: '/favorites',
} as const;

export { AppRoute };
