'use client'
import React from 'react'
import { BiSupport } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { useRouter } from 'next/navigation';
import { getAuth, signOut } from 'firebase/auth';
function ProfileMenu() {
  try {


    const router = useRouter()
    const auth = getAuth()

    const handleSignOut = async () => {
      try {
        await signOut(auth)
        router.replace("/login")
      }
      catch {

      }

    }
    return (
      <div className='w-72 h-28 rounded-xl bg-popup-background text-xl flex flex-col  items-center '>
        <div className='w-72 h-1/2 gap-5 px-2 rounded-t-xl hover:bg-subTab flex flex-row items-center'>
          <BiSupport size={50} />
          <div>Help & Support</div>

        </div>
        <div className='w-72 h-1/2 gap-5 px-2 rounded-b-xl hover:bg-subTab flex flex-row items-center'
          onMouseDown={handleSignOut}>
          <CiLogout size={50} />
          <div>Logout</div>

        </div>
      </div>
    )
  } catch {
    const router = useRouter();
    return (

      <div className='w-72 h-28 rounded-xl bg-popup-background 
        text-xl flex flex-col justify-center items-center hover:bg-subTab cursor-pointer' onMouseDown={()=>{
router.replace("/login")
        }}>
        <div>{"Please login to use VIBE"}</div>
      </div>
    )

  }

}
export default ProfileMenu
