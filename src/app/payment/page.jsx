import PaymentProducts from "../components/PaymentProducts";
import PayButton from "../components/PayButton";

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
   
      <section className="max-w-3xl mx-auto mt-12 px-6">
        <div className="space-y-10">
          <PaymentProducts
            title="Produkt 1"
            price={100}
            borderColor="#E9782D"
          />

          <PaymentProducts
            title="Produkt 2"
            price={100}
            borderColor="#487BEF"
          />
        </div>

        <div className="mt-24 text-center">
          <p className=" text-xl mb-6">
            I alt at betale: 200,-
          </p>

          <PayButton>Betal nu</PayButton>
        </div>
      </section>
    </main>
  );
}
