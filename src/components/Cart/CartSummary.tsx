"use client";

import { useCart } from "@/context/cart-context";
import CouponCode from "./CouponCode";

const CartSummary = () => {
  const cart = useCart();

  return (
    <div className="flex flex-col justify-between w-2/3 p-4 border-t border-gray-300 mt-4">
      <div className="flex justify-between text-lg mb-2">
        <span>Subtotal</span>
        <span>$ {cart.totalAmount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-lg mb-2">
        <span>Shipping</span>
        <span>FREE</span>
      </div>
      <hr className="my-2 border-gray-300" />
      <div className="flex justify-between items-center text-xl font-bold mb-2">
        <span>Total</span>
        <span>$ {cart.totalAmount.toFixed(2)}</span>
      </div>

      {/* Use the CouponCode component here */}
      <CouponCode />

      <div className="flex justify-end">
        <button className="bg-blue-600 text-white text-lg font-semibold py-2 rounded-md w-full my-10">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
