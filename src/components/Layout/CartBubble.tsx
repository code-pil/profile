"use client";

import React, { useEffect, useState } from "react";
import { useCart } from "@/context/cart-context";

const CartBadge = () => {
  const cart = useCart();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation when items.length changes
    if (cart.items.length > 0) {
      setAnimate(true);

      // Reset animation state after animation duration
      const timer = setTimeout(() => setAnimate(false), 300); // Adjust the time to match your animation duration
      return () => clearTimeout(timer);
    }
  }, [cart.items.length]);

  return (
    <span
      className={`flex justify-center items-center w-6 h-6 bg-red-500 text-white text-sm rounded-full absolute top-0 right-0 ${
        animate ? "animate-bump" : ""
      }`}
    >
      {cart.items.length}
    </span>
  );
};

export default CartBadge;
