"use client";
import Link from "next/link";
import Image from "next/image";

export default function Card({ product }) {
  return (
    <div className="shadow-md w-60 p-8 m-8 rounded-xl">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={200}
          height={200}
        />
      </Link>

      <h2 className="font-bold mt-3">{product.title}</h2>
      <p className=" mb-3">{product.price} DKK</p>

      <Link href={`/products/${product.id}`}>
        <button className="bg-white p-2 pr-6 pl-6 border border-black hover:bg-black hover:text-white transition">
          Læg i kurv
        </button>
      </Link>
    </div>
  );
}
