export type Category = {
  id: number;
  name: string;
  slug: string;
  parent: number | null;
  children: Category[];
};
