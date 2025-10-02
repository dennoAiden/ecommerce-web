import React, { useState } from "react";
import type { Product } from "../types";
import { useCart } from "./CartContext";

interface Props {
  product: Product;
  onClose: () => void;
}

const ProductDetails: React.FC<Props> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [toast, setToast] = useState("");

  const featuresArray: string[] = Array.isArray(product.features)
    ? product.features
    : JSON.parse(product.features || "[]");

  const handleAddToCart = () => {
    addToCart(product);
    setToast("Added to cart!");
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-96 rounded-lg p-6 relative shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="text-gray-700 mt-2">{product.description}</p>

        {featuresArray.length > 0 && (
          <ul className="list-disc ml-5 mt-2 text-gray-600">
            {featuresArray.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
        )}

        <p className="text-lg font-semibold mt-4">${product.price}</p>

        <button
          className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>

        {toast && (
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
            {toast}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
