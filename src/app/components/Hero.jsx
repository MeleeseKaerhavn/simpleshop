import Link from "next/link";


const Hero = () => {
    return ( 
        <section className="relative h-[calc(100vh-4.625rem)] overflow-hidden">
            <img 
        src="/heroimg.png"
        alt="Demo image"
        className="w-full h-full object-cover block"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-end p-6 mx-24 mb-24 ">
        <h1 className="text-white mb-6 text-7xl ">
            Simple Shop
        </h1>
        <Link href="/products">
        <button className="bg-white p-2 pr-6 pl-6">
            <h2>Se produkter</h2>
        </button>
        </Link>
      </div>
        </section>
     );
}
 
export default Hero;