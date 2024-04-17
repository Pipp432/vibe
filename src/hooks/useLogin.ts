'use client'
import { useContext, useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import app from "../firebase";
import { LoginDispatchContext } from "@/app/contexts/LoginContext";
import queryUserData from "@/services/loginService";
export default function useLogin() {

  const auth = getAuth(app);
  const dispatch = useContext(LoginDispatchContext)

  const router = useRouter();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const handleUserLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, username, password)
      const data: Array<string> = await queryUserData(`SELECT * FROM Professor Where emailChula = '${username}'`);
      dispatch({ type: "login", payload:{ emailChula: data[0], firstName: data[1], lastName: data[2], role: data[3] } })
      setTimeout(() => {
        
      setIsLoading(false)
      }, 4000);
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
  const handleSubmit = () => {

    setIsLoading(true);
    handleUserLogin();
  }
  return { loginFunction: { handleSubmit, handleUsernameChange, handlePasswordChange, handleUserLogin }, loginState: { username, password, isLoading, isError } }
}
