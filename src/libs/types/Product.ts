export interface Product {
  id: number;
  name: string;
  short_description?: string | null;
  price: number;
  slug: string;
  discount_percentage?: number | null;
  discounted_price?: number;
  main_image_url: string;
  is_active?: boolean;
  is_new?: boolean;
  is_best?: boolean;
  is_sale?: boolean;
  category?: number;
  category_path?: string;
  description?: string | null;
  properties?: any[];
  variations?: any[];
  images?: any[];
  is_favorite?: string;
  created_at?: string;
  updated_at?: string;
}

export type MinimalProduct = Omit<
  Product,
  | 'price'
  | 'discount_percentage'
  | 'discounted_price'
  | 'short_description'
  | 'description'
  | 'category'
  | 'properties'
  | 'variations'
  | 'images'
  | 'created_at'
  | 'updated_at'
>;

export type GetProductsDto = {
  is_best?: boolean;
  is_new?: boolean;
  is_sale?: boolean;
  limit?: number;
  max_items?: number;
  offset?: number;
  ordering?: string;
  search?: string;
  is_favorite?: string;
};
