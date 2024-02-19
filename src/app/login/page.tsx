'use client'
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import LoginInput from "../../components/login/LoginInput";
import BigButton from "@/components/general/BigButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoadingPage from "@/components/loading/LoadingPage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "@/firebase";
export default function LoginPage() {
  const auth = getAuth(app);
  const router = useRouter();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const handleUserLogin = async (username: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, username, password)

      setIsLoading(false)

      router.push("/educator/dashboard");
    }
    catch (e) {
      setIsLoading(false)
      setIsError(true)
    }
  }
  const handleUsernameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setIsError(false)
    setUsername(event.currentTarget.value)

  }
  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
    setIsError(false)
  }
  const InputStyles = {
    "normal":"p-2 w-[600px] h-[50px] rounded-2xl bg-background",
    "error":"p-2 w-[600px] h-[50px] rounded-2xl bg-background border-red-500 border-4"

  }
  return (
    <>
      {isLoading && <LoadingPage />}
      {!isLoading && <div className='flex flex-row h-[100vh] justify-between'>
        <div className='flex items-center justify-items-center flex-row ml-[20%] '>
          <Image src={logo} width={300} height={300} alt='Vibe logo' />
        </div>

        <div className='bg-primary h-full w-[40%]  p-10'>
          <div className='flex mt-28 flex-col gap-16'>
            <LoginInput isPassword={false} title='Username'
              onChangeHandler={handleUsernameChange} style={isError?InputStyles.error:InputStyles.normal}/>
            <div>
              <LoginInput isPassword={true} title='Password' onChangeHandler={handlePasswordChange} 
                style={isError?InputStyles.error:InputStyles.normal} />
              {!isError && <div className='flex flex-row-reverse mt-4'>
                <div className='text-white cursor-pointer'>{"Forgot Password?"}</div>
              </div>}

              {isError && <div className="flex flex-row gap-48 mt-4">
                <div className="text-red-500">{"Invalid Username or Password"}</div>

                <div className='text-white cursor-pointer'>{"Forgot Password?"}</div>
              </div>}
              <div className='flex items-center justify-center my-16'>
                <div className='border-8 border-red-500 h-28 w-96 rounded-xl'></div>
              </div>
              <BigButton displayText='Login'
                onClick={() => {
                  setIsLoading(true);
                  handleUserLogin(username, password);

                }} />
            </div>
          </div>
        </div>
      </div>}
    </>);
}
