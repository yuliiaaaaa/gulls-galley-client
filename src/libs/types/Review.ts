export type ReviewResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  data: Review[];
};

export type Review = {
  id: number;
  user: string;
  product?: number;
  rating: number;
  title: string;
  comment: string;
  is_approved?: boolean;
  created_at: string;
  updated_at?: string;
};
