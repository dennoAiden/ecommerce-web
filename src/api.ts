// src/api.ts
import type { Product } from "./types";

const BASE = import.meta.env.VITE_API_BASE ?? "https://ecommerce-web-li75.onrender.com";

export async function fetchProducts(category?: string): Promise<Product[]> {
  try {
    const url = new URL(`${BASE.replace(/\/$/, "")}/products`);
    if (category) url.searchParams.set("category", category);
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`Fetch error: ${res.status}`);
    const data = (await res.json()) as Product[];
    return data;
  } catch (err) {
    console.warn("fetchProducts failed, returning mock data:", err);

    return [
      {
        id: 1,
        name: "Classic Tee (mock)",
        price: 19.99,
        image: "https://via.placeholder.com/400x300?text=Classic+Tee",
        variants: [
          { id: 1, name: "S" },
          { id: 2, name: "M" },
          { id: 3, name: "L" },
        ],
        stock: 10,
        category: "Apparel",
        available: true,
      },
      {
        id: 2,
        name: "Sneaker Runner (mock)",
        price: 79.5,
        image: "https://via.placeholder.com/400x300?text=Sneaker+Runner",
        variants: [
          { id: 1, name: "8" },
          { id: 2, name: "9" },
          { id: 3, name: "10" },
        ],
        stock: 0,
        category: "Footwear",
        available: false,
      },
    ];
  }
}
