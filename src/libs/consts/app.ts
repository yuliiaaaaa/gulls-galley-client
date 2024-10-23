import { AppRoute } from '../enum/app-route-enum';

export const EMAIL = 'contact@gulls&galley.com';
export const PHONE_NUMBER = '+1 (555) 123-4567';
export const MIN_PASSWORD_LENGTH = 8;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const styledHeaderRoutes = [
  AppRoute.CATALOG,
  AppRoute.SIGN_UP,
  AppRoute.LOG_IN,
  AppRoute.CATALOG,
  AppRoute.FAVORITES,
  AppRoute.CHECKOUT,
];
export const AuthPagesRoutes = [AppRoute.SIGN_UP, AppRoute.LOG_IN];
export const DEFAULT_LIMIT_PRODUCTS = 16;
export const phoneRegex = /^(?:\+1)?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
export const zipRegex = /^\d{5}(-\d{4})?$/;
