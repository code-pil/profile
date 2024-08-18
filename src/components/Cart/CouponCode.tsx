"use client";

import { useState } from "react";

const CouponCode = () => {
  const [couponCode, setCouponCode] = useState("");
  const [message, setMessage] = useState("");

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT50") {
      setMessage("Coupon applied successfully! You saved ₹500.");
    } else {
      setMessage("Invalid coupon code. Please try again.");
    }
  };

  return (
    <div className="mt-4">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <input
          type="text"
          className="border border-gray-400 rounded-md p-2 outline-none w-1/2"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white text-lg py-2 font-semibold rounded-md w-2/5"
          onClick={handleApplyCoupon}
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
