import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const router = Router();
const prisma = new PrismaClient();

// Validation schema for POST /products
const productSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  price: z.number(),
  stock: z.number().int().nonnegative(),
  available: z.boolean(),
  image: z.string().url().optional(),
  features: z.array(z.string()).optional(),
  variants: z.array(z.object({ id: z.number(), name: z.string() })).optional(),
  category: z.string(),
});

// GET /products?category=Apparel
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    const products = category
      ? await prisma.product.findMany({ where: { category: String(category) } })
      : await prisma.product.findMany();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// GET /products/:id
router.get("/:id", async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

// POST /products
router.post("/", async (req, res) => {
  try {
    const validated = productSchema.parse(req.body);
    const newProduct = await prisma.product.create({ data: validated });
    res.status(201).json(newProduct);
  } catch (err: any) {
    res.status(400).json({ error: err.errors || err.message });
  }
});

// PATCH /products/:id/decrement
router.patch("/:id/decrement", async (req, res) => {
  const { quantity } = req.body;
  const productId = parseInt(req.params.id);

  try {
    const product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product) return res.status(404).json({ error: "Product not found" });

    if (product.stock < quantity) {
      return res.status(400).json({ error: "Not enough stock available" });
    }

    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: { stock: product.stock - quantity },
    });

    res.json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update stock" });
  }
});

// PATCH /products/:id/increment
router.patch("/:id/increment", async (req, res) => {
  const { quantity } = req.body;
  const productId = parseInt(req.params.id);

  try {
    const product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product) return res.status(404).json({ error: "Product not found" });

    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: { stock: product.stock + quantity },
    });

    res.json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to restore stock" });
  }
});

export default router;
