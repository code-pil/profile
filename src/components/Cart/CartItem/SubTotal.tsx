"use client";

import { useCart } from "@/context/cart-context";
import { useEffect } from "react";

const SubTotal = ({ id, price }: { id: number; price: number }) => {
  const cart = useCart();
  const item = cart.items.find((item) => item.id === id);
  const qty = item?.amount;

  return (
    <div className="text-lg font-semibold mt-2 md:mt-0">
      $ {((qty ?? 1) * price).toFixed(2)}
    </div>
  );
};

export default SubTotal;
