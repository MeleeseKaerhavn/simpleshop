export default function PaymentProducts({ title, price }) {
  return (
    <article className="flex items-center gap-6">

      <div
        className="w-14 h-14 rounded-lg"
        style={{ backgroundColor: "#d9d9d9" }} 
      />

 
      <div>
        <p className="text-black text-xl font-semibold">{title}</p>
        <p className="text-black text-lg">{price},-</p>
      </div>
    </article>
  );
}

