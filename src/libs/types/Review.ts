export type ReviewResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  data: Review[];
};

export type Review = {
  id: number;
  user: number;
  product: number;
  rating: number;
  title: string;
  comment: string;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
};
