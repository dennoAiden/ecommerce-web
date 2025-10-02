// backend/src/validation.ts
import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number().positive("Price must be positive"),
  category: z.string().min(1, "Category is required"),
  imageUrl: z.string().url().optional(),
  stock: z.number().int().min(0),
  variants: z.array(z.string()).optional(),
  available: z.boolean()
});
