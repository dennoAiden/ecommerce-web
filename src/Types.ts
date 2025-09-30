// src/types.ts
export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl?: string | null;
  variants?: string[] | null;
  stock: number;
  category: string;
};
