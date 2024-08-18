"use client";

import { useCart } from "@/context/cart-context";
import CouponCode from "./CouponCode";

const CartSummary = () => {
  const cart = useCart();

  const handlePercentageDiscountCoupon = () => {
    cart.addDiscount({
      discountType: "Percentage",
      discountValue: cart.totalAmount * 0.1,
    });
  };

  return (
    <div className="flex flex-col justify-between w-2/3 p-4 border-t border-gray-300 mt-4">
      <div className="flex justify-between text-lg mb-2">
        <span>Subtotal</span>
        <span>
          $ {(cart.totalAmount + cart.discount.discountValue).toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between text-lg mb-2">
        <span>Shipping</span>
        <span>FREE</span>
      </div>

      <div className="flex justify-between text-lg mb-2">
        {cart.discount.discountType === "Fixed" && cart.items.length && (
          <>
            <span>Discount</span>
            <button
              className="text-blue-700 hover:underline hover:underline-offset-8 font-normal"
              onClick={() => {
                cart.clearDiscount();
              }}
            >
              Remove
            </button>
            <span className="text-red-500">-$10</span>
          </>
        )}
        {cart.discount.discountType === "Percentage" && cart.items.length && (
          <>
            <span>Discount</span>
            <button
              className="text-blue-700 hover:underline hover:underline-offset-8 font-normal"
              onClick={() => {
                cart.clearDiscount();
              }}
            >
              Remove
            </button>
            <span className="text-red-500">
              -${cart.discount.discountValue.toFixed(2)}
            </span>
          </>
        )}
      </div>

      <hr className="my-2 border-gray-300" />
      <div className="flex justify-between items-center text-xl font-bold mb-2">
        <span>Total</span>
        <span>$ {cart.totalAmount.toFixed(2)}</span>
      </div>

      {/* Use the CouponCode component here */}
      <CouponCode handlePercentageDiscount={handlePercentageDiscountCoupon} />

      <div className="flex justify-end">
        <button className="bg-blue-600 text-white text-lg font-semibold py-2 rounded-md w-full my-10">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
