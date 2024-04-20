import React from 'react'
import CardWrapper from "@/components/general/CardWrapper"
import InformationButton from '@/components/general/InformationButton'
import ProgressStatus from "@/components/graph/ProgressStatus"
import Spinner from '@/components/loading/Spinner'
function AnalysisProgress({ emotionAndCourseData, toggleModal }: { emotionAndCourseData: any, toggleModal: () => void }) {

  return (
    <>
      <CardWrapper>
        <div className="flex flex-row gap-2 items-center mb-2">
          <div className="text-lg">{"Analysis Progress"}</div>
          <InformationButton onClick={toggleModal} />
        </div>

        <div className="w-[30rem] h-[20rem] overflow-y-scroll">
          {emotionAndCourseData.length!==0&&<div className='grid grid-cols-2 gap-x-5 gap-y-5'>
            {emotionAndCourseData.map((data: any, index:number) => { return <ProgressStatus key={index} courseName={data.name} status={data.isUploaded} /> })}
          </div>}
        
          {emotionAndCourseData.length===0&&<div className='grid place-items-center h-full'>
          
            <Spinner/>
          </div>}
        </div>
      </CardWrapper>
    </>
  )
}

export default AnalysisProgress
