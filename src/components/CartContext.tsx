import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Product } from "../types";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariantId?: number;
  selectedVariantName?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, variantId?: number, variantName?: string) => void;
  removeFromCart: (productId: number, variantId?: number) => void;
  increment: (productId: number, variantId?: number) => void;
  decrement: (productId: number, variantId?: number) => void;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode; setProducts: React.Dispatch<React.SetStateAction<Product[]>> }> = ({ children, setProducts }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateStockBackend = async (productId: number, quantityChange: number) => {
    try {
      const res = await fetch(`https://ecommerce-web-1-vlvp.onrender.com/products/${productId}/decrement`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: quantityChange }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("Failed to update stock:", text);
        return null;
      }
      const updatedProduct: Product = await res.json();
      setProducts(prev => prev.map(p => (p.id === updatedProduct.id ? updatedProduct : p)));
      return updatedProduct;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const restoreStockBackend = async (productId: number, quantity: number) => {
    try {
      const res = await fetch(`https://ecommerce-web-1-vlvp.onrender.com/products/${productId}/increment`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("Failed to restore stock:", text);
        return null;
      }
      const updatedProduct: Product = await res.json();
      setProducts(prev => prev.map(p => (p.id === updatedProduct.id ? updatedProduct : p)));
      return updatedProduct;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const addToCart = async (product: Product, variantId?: number, variantName?: string) => {
    if (product.stock <= 0) return;

    const updatedProduct = await updateStockBackend(product.id, 1);
    if (!updatedProduct) return;

    setCart(prev => {
      const existing = prev.find(i => i.product.id === product.id && i.selectedVariantId === variantId);
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id && i.selectedVariantId === variantId
            ? { ...i, quantity: i.quantity + 1, product: updatedProduct }
            : i
        );
      }
      return [...prev, { product: updatedProduct, quantity: 1, selectedVariantId: variantId, selectedVariantName: variantName }];
    });
  };

  const removeFromCart = async (productId: number, variantId?: number) => {
    const item = cart.find(i => i.product.id === productId && i.selectedVariantId === variantId);
    if (!item) return;

    await restoreStockBackend(productId, item.quantity);
    setCart(prev => prev.filter(i => !(i.product.id === productId && i.selectedVariantId === variantId)));
  };

  const increment = async (productId: number, variantId?: number) => {
    const item = cart.find(i => i.product.id === productId && i.selectedVariantId === variantId);
    if (!item || item.quantity >= item.product.stock) return;

    const updatedProduct = await updateStockBackend(productId, 1);
    if (!updatedProduct) return;

    setCart(prev =>
      prev.map(i =>
        i.product.id === productId && i.selectedVariantId === variantId
          ? { ...i, quantity: i.quantity + 1, product: updatedProduct }
          : i
      )
    );
  };

  const decrement = async (productId: number, variantId?: number) => {
    const item = cart.find(i => i.product.id === productId && i.selectedVariantId === variantId);
    if (!item) return;

    await restoreStockBackend(productId, 1);

    setCart(prev =>
      prev
        .map(i =>
          i.product.id === productId && i.selectedVariantId === variantId && i.quantity > 1
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter(i => i.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increment, decrement, setProducts }}>
      {children}
    </CartContext.Provider>
  );
};
