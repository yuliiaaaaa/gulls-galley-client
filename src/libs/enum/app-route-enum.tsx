const AppRoute = {
  ANY: '*',
  ROOT: '/',
  SIGN_UP: '/sign-up',
  LOG_IN: '/log-in',
  CATALOG: '/products',
  PRODUCT: '/products/:slug',
  EXPLORE: '#best-sellers',
  CONTACTS: '#contacts',
  ABOUT_US: '#about-us',
  ACCOUNT: '/account',
  FAVORITES: '/favorites',
  CATEGORIES: '/categories',
  USER_PAGE: '/user',
  CHECKOUT: '/checkout',
  RESET_PASSWORD: '/reset-password',
  NOT_FOUND_PAGE: '/404',
} as const;

export { AppRoute };
