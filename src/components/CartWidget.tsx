import React, { useState } from "react";
import { useCart } from "./CartContext";

const CartWidget: React.FC = () => {
  const { cart, increment, decrement, removeFromCart } = useCart();
  const [showCart, setShowCart] = useState(false);

  const validCart = cart.filter(item => item.product);

  const totalItems = validCart.reduce((acc, item) => acc + (item.quantity || 0), 0);
  const totalPrice = validCart.reduce(
    (acc, item) => acc + ((item.product?.price ?? 0) * (item.quantity ?? 0)),
    0
  );

  return (
    <div className="relative">
      <button
        className="relative bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md shadow-md"
        onClick={() => setShowCart(!showCart)}
      >
        🛒 Cart ({totalItems})
      </button>

      {showCart && (
        <div className="absolute right-0 mt-2 w-96 max-h-96 overflow-y-auto bg-gray-50 shadow-xl rounded-md p-4 z-50 border border-gray-200">
          {validCart.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            <>
              {validCart.map(item => (
                <div
                  key={`${item.product?.id}-${item.selectedVariantId ?? "no-variant"}`}
                  className="flex justify-between items-center mb-3 p-2 bg-white rounded shadow-sm"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{item.product?.name}</p>
                    {item.selectedVariantName && (
                      <p className="text-gray-500 text-sm">
                        Variant: {item.selectedVariantName}
                      </p>
                    )}
                    <p className="text-gray-500 text-sm">
                      ${item.product?.price?.toFixed(2) ?? 0} × {item.quantity} = $
                      {((item.product?.price ?? 0) * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center space-x-1">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => decrement(item.product?.id!, item.selectedVariantId)}
                    >
                      -
                    </button>
                    <span className="px-2 text-gray-800">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => increment(item.product?.id!, item.selectedVariantId)}
                      disabled={item.quantity >= (item.product?.stock ?? 0)}
                    >
                      +
                    </button>
                    <button
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => removeFromCart(item.product?.id!, item.selectedVariantId)}
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-4 font-bold text-right text-lg text-gray-800">
                Total: ${totalPrice.toFixed(2)}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartWidget;
