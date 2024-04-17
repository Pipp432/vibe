'use client'
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import LoginInput from "../../components/login/LoginInput";
import BigButton from "@/components/general/BigButton";
import LoadingPage from "@/components/loading/LoadingPage";
import useLogin from "@/hooks/useLogin";
export default function LoginPage() {
  const { loginFunction, loginState } = useLogin();
  const InputStyles = {
    "normal": "p-2 w-[600px] h-[50px] rounded-2xl bg-background",
    "error": "p-2 w-[600px] h-[50px] rounded-2xl bg-background border-red-500 border-4"

  }
  return (
    <>
      {loginState.isLoading && <LoadingPage />}
      {!loginState.isLoading && <div className='flex flex-row h-[100vh] justify-between'>
        <div className='flex items-center justify-items-center flex-row ml-[20%] '>
          <Image src={logo} width={300} height={300} alt='Vibe logo' />
        </div>

        <div className='bg-primary h-full w-[40%]  p-10'>
          <div className='flex mt-36 flex-col gap-16'>
            <LoginInput isPassword={false} title='Username'
              onChangeHandler={loginFunction.handleUsernameChange}
              style={loginState.isError ? InputStyles.error : InputStyles.normal} />
            <div>
              <LoginInput isPassword={true} title='Password' onChangeHandler={loginFunction.handlePasswordChange}
                style={loginState.isError ? InputStyles.error : InputStyles.normal} />
              {!loginState.isError && <div className='flex flex-row-reverse mt-4'>
                <div className='text-white cursor-pointer mb-28'>{"Forgot Password?"}</div>
              </div>}

              {loginState.isError && <div className="flex flex-row gap-48 mt-4">
                <div className="text-red-500">{"Invalid Username or Password"}</div>

                <div className='text-white cursor-pointer mb-28'>{"Forgot Password?"}</div>
              </div>}
              <BigButton displayText='Login'
                onClick={loginFunction.handleSubmit
                } />
            </div>
          </div>
        </div>
      </div>}
    </>);
}
