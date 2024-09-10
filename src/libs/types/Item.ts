export type Item = {
  id: number;
  title: string;
  description: string;
  price: number;
  discounted_price?: number;
  imageUrl: string;
  discount?: string;
};
