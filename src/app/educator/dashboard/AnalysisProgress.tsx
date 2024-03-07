import React from 'react'
import CardWrapper from "@/components/general/CardWrapper"
import InformationButton from '@/components/general/InformationButton'
import ProgressStatus from "@/components/graph/ProgressStatus"
function AnalysisProgress() {
  return (
  
      <CardWrapper>
        <div className="flex flex-row gap-2 items-center mb-2">
          <div className="text-lg">{"Analysis Progress"}</div>
          <InformationButton />
        </div>

        <div className="w-[30rem] h-[20rem] overflow-y-scroll">
          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-5">
              <div className="flex flex-col gap-5">
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
              </div>
              <div className="flex flex-col gap-5">
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
                <ProgressStatus courseName="Intro Sto Mod" status="processing" />
              </div>
            </div>
          </div>

        </div>
      </CardWrapper>
  )
}

export default AnalysisProgress
