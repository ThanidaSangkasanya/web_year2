import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (<div className="min-h-64">
    <h1 className="text-3xl">Index page</h1> 
    <Link href="/product">Product</Link>
   {/* <Image 
    src="/images/main.jpg" alt="Your Image" width={500} height={300}
    />*/}

    </div>)
}
