'use client'
import React, { useEffect, useState } from 'react'
import EmotionRankChart from "@/components/graph/EmotionRankChart"
import CardWrapper from "@/components/general/CardWrapper"
import InformationButton from '@/components/general/InformationButton'
import { sortObject } from '../../helper/sortObject'
function EmotionSummary({ emotionAndCourseData, toggleModal }: { emotionAndCourseData: any, toggleModal: () => void }) {
  return (

    <CardWrapper>
      <div className="flex flex-row gap-2 items-center mb-4">

        <div className='text-lg'>{"Emotional Summary"}</div>

        <InformationButton onClick={toggleModal} />
      </div>
      <div className="w-[30rem] h-[18rem]  overflow-y-scroll">
        <div className="flex flex-col gap-8">
          <div className='flex flex-row gap-5'>
            <div className="flex flex-col gap-5 w-[25vw]">
              {emotionAndCourseData.map((data: any, index: number) => {
                return <EmotionRankChart key={index} course={data.courseID} data={sortObject(data.OverallEmotion)} />
              })}
            </div>
          </div>
        </div>
      </div>

    </CardWrapper>
  )
}

export default EmotionSummary
