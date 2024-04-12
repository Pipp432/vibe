'use client'
import { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import app from "../firebase";
export default function useLogin() {

  const auth = getAuth(app);

  const router = useRouter();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const handleUserLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, username, password)


      const userData = await fetch("http://127.0.0.1:5000/query_user", { method: "POST", body: username })
      console.log(userData)
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
  const handleSubmit = () => {

    setIsLoading(true);
    handleUserLogin();
  }
  return { loginFunction: { handleSubmit, handleUsernameChange, handlePasswordChange, handleUserLogin }, loginState: { username, password, isLoading, isError } }
}
