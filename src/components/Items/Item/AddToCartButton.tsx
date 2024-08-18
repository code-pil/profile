"use client";

import { useCart } from "@/context/cart-context";
import React from "react";

const AddToCartButton = ({
  id,
  price,
  title,
  thumbnail,
  discountPercentage,
}: {
  id: number;
  price: number;
  title: string;
  thumbnail: string;
  discountPercentage: number;
}) => {
  const cart = useCart();

  // Check if the item is already in the cart
  const isInCart = cart.items.some((item) => item.id === id);

  return (
    <button
      className={`lg:hidden group-hover:block absolute bottom-0 ${
        isInCart ? "bg-gray-700" : "bg-black"
      } text-white w-full p-2 rounded-b-md`}
      onClick={() => {
        if (isInCart) {
          // Remove item from cart if it's already there
          cart.removeItem(id);
        } else {
          // Add item to cart
          cart.addItem({
            id,
            price,
            title,
            discountPercentage,
            thumbnail,
            amount: 1,
          });
        }
      }}
    >
      {isInCart ? "Remove from Cart" : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
