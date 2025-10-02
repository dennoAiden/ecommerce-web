import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

const allowedOrigins = [
  "https://ecommerce-website-ffcq.onrender.com"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, 
}));

app.get("/", (req, res) => {
  res.send("Backend API running 🚀");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});