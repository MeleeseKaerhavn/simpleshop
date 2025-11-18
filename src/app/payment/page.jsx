"use client";
import { useEffect, useState } from "react";
import Kurv from "../components/Kurv";
import PayButton from "../components/PayButton";

export default function PaymentPage() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("cartItems");
    if (!saved) return;

    const items = JSON.parse(saved);
    const sum = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    setTotal(sum);
  }, []);
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <section className="max-w-3xl mx-auto mt-12 px-6">
        
        <Kurv paymentMode={true} />

        <div className="mt-24 text-center">
          <p className="text-xl mb-6">I alt at betale:  {total},-</p>
          <PayButton>Betal nu</PayButton>
        </div>
      </section>
    </main>
  );
}