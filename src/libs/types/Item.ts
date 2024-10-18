import { Product } from "./products/Product";

export type Item = {
  id: number;
  name: string;
  short_description?: string | null;
  price: number;
  discounted_price?: number;
  main_image_url: string;
  discount?: string;
};
