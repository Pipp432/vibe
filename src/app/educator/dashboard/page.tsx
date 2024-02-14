'use client'
import Button from "@/components/general/Button"

import CardWrapper from"../../../components/general/CardWrapper"
export default function DashboardPage(){
  return(
    <div className="">
      <Button type='view' onClickHandler={()=>{console.log("hi")}}/>
    </div>
  )
}
