"use client";
import Link from "next/link";
import Image from "next/image";
import useCartStore from "../store/cartStore"; 

export default function Card({ product }) {
  const status = product.availabilityStatus;
  const isLowStock = status === "Low Stock";

  const addToCart = useCartStore((state) => state.addToCart);



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

      <Link href={`/products/${product.id}`}>
        <h2 className="font-bold mt-3">{product.title}</h2>
        <p className="mb-3">{product.price} DKK</p>
      </Link>

      <button
        onClick={() => addToCart(product)} 
        className="bg-white p-2 pr-6 pl-6 border border-black hover:bg-black hover:text-white transition"
      >
        Læg i kurv
      </button>
    </div>
  );
}


// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useEffect } from "react";

// export default function Card({ product }) {
//     const status = product.availabilityStatus;
//     const isLowStock = status === "Low Stock";

//     //function til at tilføje til kurv i local sstorage
//     const addToCart = () => {
//       const saved = localStorage.getItem("cartItems");
//       const cart = saved ? JSON.parse(saved) : [] ;
//       const exists = cart.find((item) => item.id === product.id);

//       if (!exists) {
//         cart.push({...product, quantity: 1});
//       } else {
//         const updated = cart.map((item) => 
//         item.id === product.id
//         ? { ...item, quantity: item.quantity + 1}
//         : item 
//       );
//       cart.splice(0, cart.length, ...updated);//overskriv cart
//       }

//       localStorage.setItem("cartItems", JSON.stringify(cart));

//       //trigger event for kurv-componentet
//       window.dispatchEvent(new Event ("cartUpdated"));
//     };
// }
