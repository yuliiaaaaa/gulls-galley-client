const AppRoute = {
  ANY: '*',
  ROOT: '/',
  SIGN_UP: '/sign-up',
  LOG_IN: 'log-in',
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
  CATEGORIES: '/categories',
} as const;

export { AppRoute };
