import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import CartWidget from "./components/CartWidget";
import { CartProvider } from "./components/CartContext";
import type { Product } from "./types";
import ProductDetails from "./components/ProductDetails";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://ecommerce-web-backend-x9o7.onrender.com/products"); 
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  const openProductDetails = (product: Product) => setSelectedProduct(product);
  const closeProductDetails = () => setSelectedProduct(null);

  return (
    <CartProvider setProducts={setProducts}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-indigo-600 text-white shadow-md">
          <h1 className="text-xl sm:text-2xl font-bold">Apple Store</h1>
          <CartWidget />
        </header>

        <main className="flex-1 p-4 sm:p-6 mt-20">
          <ProductList products={products} openProductDetails={openProductDetails} />
        </main>

        <footer className="text-center py-4 bg-gray-100 text-gray-600 text-sm mt-auto">
          © {new Date().getFullYear()} Laptop Store. All rights reserved.
        </footer>

        {selectedProduct && (
          <ProductDetails product={selectedProduct} onClose={closeProductDetails} />
        )}
      </div>
    </CartProvider>
  );
};

export default App;
