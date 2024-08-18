"use client";

import { useCart } from "@/context/cart-context";
import { useState } from "react";

const CouponCode = ({
  handlePercentageDiscount,
}: {
  handlePercentageDiscount: () => void;
}) => {
  const [couponCode, setCouponCode] = useState("");
  const [message, setMessage] = useState("");
  const cart = useCart();

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === "fixed") {
      setMessage("Coupon applied successfully! You saved $10.");
      cart.addDiscount({
        discountType: "Fixed",
        discountValue: 10,
      });
    } else if (couponCode.toLowerCase() === "percentage") {
      setMessage("Coupon applied successfully! You saved extra 10%.");
      handlePercentageDiscount();
    } else {
      setMessage(
        "Invalid coupon code. Please try again. \n Try to use fixed or percentage"
      );
    }
  };

  return (
    <div className="mt-4">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <input
          type="text"
          className="border border-gray-400 rounded-md p-2 outline-none lg:w-1/2 lg:mb-0 mb-4 w-full"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
        />
        <button
          className="bg-blue-600 text-white text-lg py-2 font-semibold rounded-md w-full lg:w-2/5 disabled:bg-fourth disabled:text-black disabled:cursor-not-allowed"
          onClick={handleApplyCoupon}
          disabled={
            cart.discount.discountType !== "" || cart.items.length === 0
          }
        >
          Apply Coupon
        </button>
      </div>
      {message && (
        <div
          className={`mt-2 text-sm ${
            message.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default CouponCode;
