"use client";

import { useCart } from "@/context/cart-context";

const RemoveButton = ({ id }: { id: number }) => {
  const cart = useCart();

  return (
    <button
      className="text-blue-700 hover:underline hover:underline-offset-8 font-normal"
      onClick={() => {
        cart.removeItem(id);
      }}
    >
      Remove
    </button>
  );
};

export default RemoveButton;
