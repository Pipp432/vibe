"use client"
import { useRouter } from "next/navigation"

export default function Home() {
const router = useRouter()  
  return(
    <div className='grid place-items-center h-[100vh]'>
      <button className='p-2 bg-secondary text-black text-3xl rounded-lg'onClick={()=>{router.push("/login")}}>ENTER VIBE</button>
    </div>
  );
}
