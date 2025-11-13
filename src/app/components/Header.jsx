import Link from "next/link";


const Header = () => {
    return ( 
        <section className="border p-6">
            <div className="flex gap-12 font-extrabold">  
            <Link href="/" className="">
            Home
            </Link>
            <Link href="/products">
            Products
            </Link>
            </div>
        </section>
     );
}
 
export default Header;