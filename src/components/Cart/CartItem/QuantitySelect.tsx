"use client";

import { useCart } from "@/context/cart-context";
import { NumberOfProducts } from "@/utils/utils";
import { ChangeEvent } from "react";
import { useState } from "react";

const QuantitySelect = ({
  id,
  title,
  thumbnail,
  price,
  discountPercentage,
}: {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
}) => {
  const [value, setValue] = useState<number>(1);
  const cart = useCart();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = Number(event.target.value); // Convert value to a number
    setValue(newValue);
    cart.addItem({
      id,
      title,
      price,
      discountPercentage,
      thumbnail,
      amount: newValue,
    });
  };

  return (
    <div>
      <select
        className="outline-none bg-transparent font-semibold text-lg"
        value={cart.items.find((item) => item.id === id)?.amount ?? 1}
        onChange={handleChange}
      >
        {NumberOfProducts.map((qty: number) => (
          <option key={qty} value={qty}>
            {qty}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QuantitySelect;
