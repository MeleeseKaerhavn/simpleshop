"use client";
import Link from "next/link";
import Image from "next/image";

export default function Card({ product }) {
    const status = product.availabilityStatus;
    const isLowStock = status === "Low Stock";


  return (
    <div className="relative shadow-md w-60 p-8 m-8 rounded-xl">
        
    {isLowStock && (
        <span className="absolute right-4 top-4 text-xs font-semibold text-red-500">
          Low stock
        </span>
      )}

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
