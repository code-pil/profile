"use client";

import Item from "@/components/Items/Item/Item";
import { Product, ProductReponse } from "@/types/type";
import { productsData } from "@/utils/Products";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = () => {
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mr-24 md:ml-24 mt-32 place-items-center place-content-center -z-10">
      {products.length !== 0 &&
        products.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              thumbnail={item.thumbnail}
              discountPercentage={item.discountPercentage}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          );
        })}
    </div>
  );
}
