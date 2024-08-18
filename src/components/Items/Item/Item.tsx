import Image from "next/image";
import React from "react";
import Tag from "./Tag";
import AddToCartButton from "./AddToCartButton";

// const item = {
//   id: 1,
//   title: "Essence Mascara Lash Princess Princess Princess",
//   description:
//     "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//   category: "beauty",
//   price: 9.99,
//   discountPercentage: 7.17,
//   rating: 4.94,
//   stock: 5,
//   tags: ["beauty", "mascara"],
//   brand: "Essence",
//   sku: "RCH45Q1A",
//   weight: 2,
//   dimensions: {
//     width: 23.17,
//     height: 14.43,
//     depth: 28.01,
//   },
//   warrantyInformation: "1 month warranty",
//   shippingInformation: "Ships in 1 month",
//   availabilityStatus: "Low Stock",
//   reviews: [
//     {
//       rating: 2,
//       comment: "Very unhappy with my purchase!",
//       date: "2024-05-23T08:56:21.618Z",
//       reviewerName: "John Doe",
//       reviewerEmail: "john.doe@x.dummyjson.com",
//     },
//     {
//       rating: 2,
//       comment: "Not as described!",
//       date: "2024-05-23T08:56:21.618Z",
//       reviewerName: "Nolan Gonzalez",
//       reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
//     },
//     {
//       rating: 5,
//       comment: "Very satisfied!",
//       date: "2024-05-23T08:56:21.618Z",
//       reviewerName: "Scarlett Wright",
//       reviewerEmail: "scarlett.wright@x.dummyjson.com",
//     },
//   ],
//   returnPolicy: "30 days return policy",
//   minimumOrderQuantity: 24,
//   meta: {
//     createdAt: "2024-05-23T08:56:21.618Z",
//     updatedAt: "2024-05-23T08:56:21.618Z",
//     barcode: "9164035109868",
//     qrCode: "https://assets.dummyjson.com/public/qr-code.png",
//   },
//   images: [
//     "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
//   ],
//   thumbnail:
//     "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
// };

const Item = ({
  id,
  thumbnail,
  discountPercentage,
  title,
  description,
  price,
}: {
  id: number;
  thumbnail: string;
  discountPercentage: number;
  title: string;
  description: string;
  price: number;
}) => {
  return (
    <div className="m-4 flex flex-col items-center justify-center p-5 rounded-lg hover:cursor-pointer">
      <div className="bg-fourth w-[200px] h-[200px] md:w-[250px] md:h-[250px] flex justify-center items-center relative group rounded-md">
        <Image src={thumbnail} alt="Item" width={200} height={200} />
        <AddToCartButton
          id={id}
          price={price}
          title={title}
          thumbnail={thumbnail}
          discountPercentage={discountPercentage}
        />
        <Tag category={discountPercentage} />
      </div>
      <div className="text-black mt-3 font-bold text-ellipsis overflow-hidden text-nowrap w-[200px] md:w-[250px]">
        {title}
      </div>
      <div className="text-black mt-2 text-ellipsis overflow-hidden text-nowrap w-[200px] md:w-[250px]">
        {description}
      </div>
      <div className="text-black w-full text-start">$ {price}</div>
    </div>
  );
};

export default Item;
