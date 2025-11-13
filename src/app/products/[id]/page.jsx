"use client";

import { useEffect, useState } from "react";

import Image from "next/image";


export default function ProductPage({params}) {
    const {id} = params;
  const [product, setProduct] = useState(null);

  useEffect(() =>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => setProduct(data))
    .catch((error) => console.error("Error fetching product:", error));
}, [id]);


  return (
    <section >
      {products.map((product) => (
        <div
          key={product.id}
          //className={`${
           // product.category === "beauty" ? "bg-pink-100" : "bg-gray-100"}`}
        >
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="rounded-lg"
          />
          <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
          <p className="text-sm text-gray-600">{product.category}</p>
          <p className="font-bold mt-1">{product.price} DKK</p>
        </div>
      ))}
    </section>
  );
}