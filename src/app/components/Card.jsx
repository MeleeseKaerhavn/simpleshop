import Link from "next/link";
import Image from "next/image";

const Card = () => {
    return ( <div className="shadow-md w-60 p-8 m-8 rounded-xl">
    <Link
      href="/products/1">
    <Image src="/placeholderimg.jpg" alt="Product Image" width={200} height={200} />
    </Link>
    <h2 className="font-bold mt-3">Product Title</h2>
    <p className="text-nowrap mb-3">Product Description</p>
    <Link href="/products/1"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Product</button></Link>

    </div> );
}
 
export default Card;