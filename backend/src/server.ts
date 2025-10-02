import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import productsRouter from "./routes/products";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Mount products router
app.use("/products", productsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
