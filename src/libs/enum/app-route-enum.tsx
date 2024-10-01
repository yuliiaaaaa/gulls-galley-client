const AppRoute = {
  ANY: '*',
  ROOT: '/',
  SIGN_UP: '/sign-up',
  LOG_IN: '/log-in',
  FURNITURE: '/products/furniture',
  OTHER: '/products/other',
  ACCESSORIES: '/products/accessories',
  LIGHTNING: '/products/lighting',
  CATALOG: '/products',
  PRODUCT: '/products/:slug',
  EXPLORE: '#best-sellers',
  CONTACTS: '#contacts',
  ABOUT_US: '#about-us',
  ACCOUNT: '/account',
  CART: '/cart',
  FAVORITES: '/favorites',
  CATEGORIES: '/categories',
  USER_PAGE: '/user',
  RESET_PASSWORD: '/reset-password',
  NOT_FOUND_PAGE: '/404',
} as const;

export { AppRoute };
