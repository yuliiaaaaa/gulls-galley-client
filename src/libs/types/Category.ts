export type Category = {
  id: number;
  name: string;
  parent: number | null;
  children: Category[];
};
