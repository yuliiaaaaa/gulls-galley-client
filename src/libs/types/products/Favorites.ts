import { Product } from './Product';

export type FavoriteProduct = {
  id: number;
  product: Product;
  created_at: string;
};

export type GetFavoritesResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  data: { results: FavoriteProduct[] };
};
