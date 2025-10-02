import express from "express";
import cors from "cors";
import productsRouter from "./routes/products"; 


const app = express();
const port = process.env.PORT || 4000;

const allowedOrigins = [
  "https://ecommerce-website-ffcq.onrender.com"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, 
}));

app.use(express.json());

app.use("/products", productsRouter);
app.get("/", (req, res) => {
  res.send("Backend API running 🚀");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});