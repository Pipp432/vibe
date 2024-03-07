import React from 'react'
import EmotionRankChart from "@/components/graph/EmotionRankChart"
import CardWrapper from "@/components/general/CardWrapper"
import InformationButton from '@/components/general/InformationButton'
function EmotionSummary() {
  return (
  
      <CardWrapper>
        <div className="flex flex-row gap-2 items-center mb-4">

          <div className='text-lg'>{"Emotional Summary"}</div>

          <InformationButton />
        </div>
        <div className="w-[30rem] h-[20rem] overflow-y-scroll">
          <div className="flex flex-col gap-8">
            <div className='flex flex-row gap-5'>
              <div className="flex flex-col gap-5">
                <EmotionRankChart percentage={["50%", "40%", "10%"]} course={"2102134"} />
                <EmotionRankChart percentage={["50%", "40%", "10%"]} course={"2102134"} />
                <EmotionRankChart percentage={["50%", "40%", "10%"]} course={"2102134"} />
                <EmotionRankChart percentage={["50%", "40%", "10%"]} course={"2102134"} />
                <EmotionRankChart percentage={["50%", "40%", "10%"]} course={"2102134"} />
                <EmotionRankChart percentage={["40%", "30%", "30%"]} course={"202324"} />
                <EmotionRankChart percentage={["40%", "30%", "30%"]} course={"202324"} />
                <EmotionRankChart percentage={["40%", "30%", "30%"]} course={"202324"} />
                <EmotionRankChart percentage={["50%", "40%", "10%"]} course={"230543"} />

              </div>
            </div>
          </div>
        </div>

      </CardWrapper>
  )
}

export default EmotionSummary
