"use client";

import Link from "next/link";
import useCartStore from "../store/cartStore";
import PayButton from "./PayButton";

export default function Kurv() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
  } = useCartStore();

  return (
    <div className="border p-4 rounded shadow-md w-80">
      <h2 className="font-bold mb-4">Kurv</h2>

      {cartItems.length === 0 && <p>Kurv er tom</p>}

      <ul className="space-y-2">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center">
            <div>
              <p>{item.title}</p>
              <p>DKK {item.price},-</p>

              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-2 border"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-2 border"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 font-bold ml-4"
            >
              X
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <Link href="/payment">
          <PayButton>Gå til betaling</PayButton>
        </Link>
      </div>
    </div>
  );
}



// "use client";
// import { useEffect, useState } from "react";
// import PayButton from "./PayButton";
// import Link from "next/link";

// export default function Kurv(){
//   const [cartItems, setCartItems] = useState ([]);

//   //hent kurv fra local storage ved load
//   useEffect (() => {
//     const saved = localStorage.getItem("cartItems");
//     if (saved) setCartItems(JSON.parse(saved));
//   }, []);

//   //lytter efter opdateringer fra andre componenter
//   useEffect(() => {
//     const handler = () => {
//       const saved = localStorage.getItem("cartItems");
//       setCartItems(saved ? JSON.parse(saved) : []);
//     };
//     window.addEventListener("cartUpdated", handler);
//     return () => window.removeEventListener("cartUpdated", handler);
//   }, []);

//   //gem kurv i local storage
//   const saveCart = (items) => {
//     localStorage.setItem("cartItems", JSON.stringify(items));
//     setCartItems(items);
//   };

//   //fjern producter
//   const removeFromCart = (id) => saveCart(cartItems.filter((i) => i.id !== id));

//   //tilføj items
//   const addToCart = (product) => {
//     const exists = cartItems.find((item) => item.id ===product.id);
//     if (!exists) {
//       saveCart([...cartItems, {...product, quantity: 1}]);
//     } else{
//       //hvis product allerede findes, øg quantity
//       const updated = cartItems.map ((item) =>
//       item.id === product.id? {...item, quantity: item.quantity +1}
//     : item
//   );
//   saveCart(updated);
//     }
//   };

  

//   //ændr quantity
//   const updateQuantity = (id, delta) => {
//     const updated = cartItems
//       .map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item)
//       .filter(item => item.quantity > 0);
//     saveCart(updated);
//   };


//   return(
//     <div className="border p-4 rounded shadow-md w-80">
//       <h2 className="font-bold mb-4">Kurv</h2>
//       {cartItems.length === 0 && <p>Kurv er tom</p>}

//       <ul className="space-y-2">
//         {cartItems.map((item) => (
//            <li key={item.id} className="flex justify-between items-center">
//             <div>
//               <p> {item.title}</p>
//               <p>DKK {item.price} ,-</p>

//               <div className="flex items-center gap-2 mt-1">
//                 <button
//                 onClick={() => updateQuantity(item.id, -1)}
//                 className="px-2 border">
//                   -
//                 </button>
//                 <span>{item.quantity}</span>

//                 <button
//                 onClick={() => updateQuantity(item.id, 1)}
//                 className="px-2 border">
//                   +
//                 </button>

//               </div>
//             </div>
//             <button
//               onClick={() => removeFromCart(item.id)}
//               className="text-red-500 font-bold ml-4"
//             >
//               X
//             </button>
//             </li>
//         ))}
//       </ul>
//       <div className="mt-4">
//         <Link href="/payment">
//       <PayButton>Gå til betaling</PayButton>
//         </Link>
//       </div>

//       </div>
//   );
// }

// /*import Link from "next/link";

// const Kurv = () => {
//     return ( 
//     <div className="max-w-xs rounded-xl border border-black bg-white p-4 space-y-4">
//   <div className="space-y-2 text-sm">
//     <div 
//     id="todoContainer"
//     className="flex justify-between">
      
//     </div>
    

//     <div className="mt-2 border-t border-black pt-2 font-semibold">
//       <div className="flex justify-between">
//         <span>Total</span>
//         <span>200,-</span>
//       </div>
//     </div>
//   </div>
// <Link href="/payment">
//   <button
//     type="button"
//     className="bg-white p-2 pr-6 pl-6 border-1 border-black hover:bg-black hover:text-white transition"
//     >
//     Gå til betaling
//   </button>
//     </Link>
  
// </div>
// );
// }
 
// export default Kurv;*/