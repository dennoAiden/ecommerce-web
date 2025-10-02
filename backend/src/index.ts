import express from "express";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Backend API running 🚀");
});

app.listen(port, () => {
  console.log(`Server is running on https://ecommerce-web-1-vlvp.onrender.com:${port}`);
});
