export type CartItem = {
  product_id: number;
  quantity: number;
  variation_id?: number;
};

export type Cart = {
  cart_id: number;
  user: number | null;
  items: CartItem[];
  total_price: string;
  created_at: string;
  updated_at: string;
};

export type CartItemAdd = {
  product_id: number;
  quantity: number;
  variation_id?: number;
};

export type PatchedCartItemUpdateQuantity = {
  quantity: number;
};
