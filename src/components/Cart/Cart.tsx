"use client";

import React from "react";
import CartItem from "./CartItem/CartItem";
import CartSummary from "./CartSummary";
import { useCart } from "@/context/cart-context";
import { CartItemType } from "@/types/type";

const Cart = () => {
  const cart = useCart();

  return (
    <>
      <div className="mt-32 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-4xl font-semibold mt-10 text-center">
            Your cart total is ${cart.totalAmount.toFixed(2)}
          </div>
          <button className="bg-button rounded-md text-white pt-2 pb-2 pl-24 pr-24 mt-8 mb-8">
            Checkout
          </button>
        </div>
        {cart.items.map((item: CartItemType) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              price={item.price}
              thumbnail={item.thumbnail}
              title={item.title}
              discountPercentage={item.discountPercentage}
            />
          );
        })}
        <CartSummary />
      </div>
    </>
  );
};

export default Cart;
