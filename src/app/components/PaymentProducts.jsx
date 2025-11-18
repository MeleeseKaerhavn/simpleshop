import Image from "next/image";

export default function PaymentProducts({ image, title, price }) {
  return (
    <article className="flex items-center gap-6">

      <div

        className="w-14 h-14 rounded-lg"
        // style={{ backgroundColor: "#d9d9d9" }} 
      >
      
      <Image
                src={image}
                alt={title}
                width={200}
                height={200}
                />

      </div>
 
      <div>
        <p className="text-black text-xl font-semibold">{title}</p>
        <p className="text-black text-lg">{price},-</p>
      </div>
    </article>
  );
}

