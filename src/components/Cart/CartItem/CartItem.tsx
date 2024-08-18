import Image from "next/image";
import React from "react";
import QuantitySelect from "./QuantitySelect";
import RemoveButton from "./RemoveButton";
import SubTotal from "./SubTotal";

const CartItem = ({
  id,
  thumbnail,
  price,
  title,
  discountPercentage,
}: {
  id: number;
  thumbnail: string;
  price: number;
  title: string;
  discountPercentage: number;
}) => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-6 p-4 w-2/3 border-t-2 text-black hover:cursor-pointer">
      <div className="bg-fourth rounded-md flex-shrink-0 flex justify-center items-center w-full md:w-[150px] lg:w-[200px]">
        <Image
          src={thumbnail}
          alt="Item"
          width={150}
          height={150}
          className="rounded-md"
        />
      </div>

      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col justify-between">
          <div className="text-black font-semibold text-lg">{title}</div>
          <div className="text-lg">$ {price}</div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <QuantitySelect
            id={id}
            price={price}
            thumbnail={thumbnail}
            title={title}
            discountPercentage={discountPercentage}
          />
          <SubTotal id={id} price={price} />
          <RemoveButton id={id} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
