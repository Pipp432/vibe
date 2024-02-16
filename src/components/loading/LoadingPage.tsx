import React from 'react'
import Spinner from './Spinner'
import Image from 'next/image'
import logo from "../../../public/images/logo.png"
function LoadingPage() {
  return (<>
    <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-16 animate-fade-in'>
      <Image src={logo} alt='logo' width={400}/>
      <Spinner />
    </div>
    
    </>
  )
}

export default LoadingPage
