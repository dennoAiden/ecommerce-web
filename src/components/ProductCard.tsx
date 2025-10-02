import React, { useState } from "react";
import type { Product, Variant } from "../types";
import { useCart } from "./CartContext";

type ProductCardProps = {
  product: Product;
  onClick: () => void; 
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { cart, addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<number | undefined>();
  const [toast, setToast] = useState("");

  const parsedVariants: Variant[] =
    typeof product.variants === "string"
      ? JSON.parse(product.variants)
      : product.variants ?? [];

  const validCart = cart.filter((item) => item.product);
  const cartQuantity =
    validCart.find(
      (item) =>
        item.product!.id === product.id &&
        item.selectedVariantId === selectedVariant
    )?.quantity ?? 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (cartQuantity >= product.stock) {
      setToast("Out of Stock!");
    } else {
      addToCart(product, selectedVariant);
      setToast("Added to Cart Successfully!");
    }

    setTimeout(() => setToast(""), 2000);
  };

  return (
    <div
      className={`border p-4 rounded shadow hover:shadow-lg transition cursor-pointer relative ${
        product.stock === 0 ? "opacity-50" : ""
      }`}
      onClick={onClick}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="font-semibold">${product.price?.toFixed(2) ?? "0.00"}</p>

      {parsedVariants.length > 0 && (
        <select
          className="border p-2 rounded mt-2 w-full"
          value={selectedVariant}
          onChange={(e) =>
            setSelectedVariant(
              e.target.value ? Number(e.target.value) : undefined
            )
          }
        >
          <option value="">Select Variant</option>
          {parsedVariants.map((variant) => (
            <option key={variant.id} value={variant.id}>
              {variant.name}
            </option>
          ))}
        </select>
      )}

      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full ${
          cartQuantity >= product.stock ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleAddToCart}
        disabled={cartQuantity >= product.stock || product.stock === 0}
      >
        {cartQuantity >= product.stock || product.stock === 0
          ? "Out of Stock"
          : "Add to Cart"}
      </button>

      {/* Toast message */}
      {toast && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          {toast}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
