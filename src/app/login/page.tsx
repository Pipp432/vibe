'use client'
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import LoginInput from "../../components/login/LoginInput";
import BigButton from "@/components/general/BigButton";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <div className='flex flex-row h-[100vh] justify-between'>
      <div className='flex items-center justify-items-center flex-row ml-[20%] '>
        <Image src={logo} width={300} height={300} alt='Vibe logo' />
      </div>

      <div className='bg-primary h-full w-[40%]  p-10'>
        <div className='flex mt-28 flex-col gap-16'>
          <LoginInput isPassword={false} title='Username' />
          <div>
            <LoginInput isPassword={true} title='Password' />
            <div className='flex flex-row-reverse mt-4'>
              <div className='text-white cursor-pointer'>{"Forgot Password?"}</div>
            </div>
            <div className='flex items-center justify-center my-16'>
              <div className='border-8 border-red-500 h-28 w-96 rounded-xl'></div>
            </div>
            <BigButton displayText='Login'
              onClick={() => {router.push("/educator/dashboard"); console.log("click") }} />
          </div>
        </div>
      </div>
    </div>
  );
}
