import Link from "next/link";

export default function Home() {
  return (
   <div className='flex items-center h-screen justify-center'>
   <Link href={"/blog"}>
   <button className='bg-black border-0 text-white py-4 px-4 border-white hover:bg-slate-200 hover:text-black'>See Our Blogs</button>
   </Link>  </div>
  )
}
