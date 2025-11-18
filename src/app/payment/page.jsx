"use client";

import useCartStore from "../store/cartStore"; 
import PaymentProducts from "../components/PaymentProducts";
import PayButton from "../components/PayButton";

export default function PaymentPage() {
  const cartItems = useCartStore((state) => state.cartItems);

  // calculate total
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen ">
      <section className="max-w-3xl mx-auto mt-12 px-6">

        {/* All cart items displayed using your own component */}
        <div className="space-y-10">
          {cartItems.map((item) => (
            <PaymentProducts
              key={item.id}
              title={item.title}
              price={item.price * item.quantity}
              image={item.thumbnail}
              // borderColor="#E9782D" 
              // or choose a color based on category
            />
          ))}
        </div>

        {/* Total */}
        <div className="mt-24 text-center">
          <p className="text-xl mb-6">
            I alt at betale: {total},-
          </p>

          <PayButton>Betal nu</PayButton>
        </div>

      </section>
    </main>
  );
}



// import PaymentProducts from "../components/PaymentProducts";
// import PayButton from "../components/PayButton";

// export default function PaymentPage() {
//   return (
//     <main className="min-h-screen bg-[#FDFBF7]">
   
//       <section className="max-w-3xl mx-auto mt-12 px-6">
//         <div className="space-y-10">
//           <PaymentProducts
//             title="Produkt 1"
//             price={100}
//             borderColor="#E9782D"
//           />

//           <PaymentProducts
//             title="Produkt 2"
//             price={100}
//             borderColor="#487BEF"
//           />
//         </div>

//         <div className="mt-24 text-center">
//           <p className=" text-xl mb-6">
//             I alt at betale: 200,-
//           </p>

//           <PayButton>Betal nu</PayButton>
//         </div>
//       </section>
//     </main>
//   );
// }
