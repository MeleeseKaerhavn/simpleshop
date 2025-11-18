"use client";
import Kurv from "../components/Kurv";
import PayButton from "../components/PayButton";

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <section className="max-w-3xl mx-auto mt-12 px-6">
        
        <Kurv paymentMode={true} />

        <div className="mt-24 text-center">
          <p className="text-xl mb-6">I alt at betale: 200,-</p>
          <PayButton>Betal nu</PayButton>
        </div>
      </section>
    </main>
  );
}