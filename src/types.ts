export type Variant = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
  description?: string;
  available: boolean;
  stock: number;
  category: string;
  features?: string[];
  variants?: Variant[] | string; // can come as array or string
};
