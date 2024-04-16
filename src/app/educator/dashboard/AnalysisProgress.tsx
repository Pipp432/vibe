'use client'
import React from 'react'
import CardWrapper from "@/components/general/CardWrapper"
import InformationButton from '@/components/general/InformationButton'
import ProgressStatus from "@/components/graph/ProgressStatus"
function AnalysisProgress({emotionAndCourseData,toggleModal}:{emotionAndCourseData:any,toggleModal:()=>void}) {
  console.log(emotionAndCourseData)
  return (
    <>
      <CardWrapper>
        <div className="flex flex-row gap-2 items-center mb-2">
          <div className="text-lg">{"Analysis Progress"}</div>
          <InformationButton onClick={toggleModal } />
        </div>

        <div className="w-[30rem] h-[20rem] overflow-y-scroll">
          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-5">
            {emotionAndCourseData.map((data:any)=>{return <ProgressStatus courseName={data.name} status={data.isUploaded} />})}
            </div>
          </div>

        </div>
      </CardWrapper>
    </>
  )
}

export default AnalysisProgress
