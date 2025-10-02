import React from "react";
import type { Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  openProductDetails: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, openProductDetails }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => openProductDetails(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
