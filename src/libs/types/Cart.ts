import { Product } from './products/Product';


export type Cart = {
  cart_id: number;
  user: number | null;
  items: CartItem[];
  total_price: string;
  created_at: string;
  updated_at: string;
};

export type CartResponse = {
  count: number;
  next: string;
  previous: string;
  data: Cart;
};

export type CartItemAdd = {
  product_id: number;
  quantity: number;
  variation_id?: number | null;
};

export type CartItem = {
  product_id: number;
  quantity: number;
  variation?: Variation;
};

export type PatchedCartItemUpdateQuantity = {
  quantity: number;
};

type Variation = {
  id: number;
  product: Product;
  variation_type: string;
  value: string;
  image?: string;
};
