'use client'
import React from 'react'
import useModal from '@/hooks/useModal'
import CardWrapper from "@/components/general/CardWrapper"
import InformationButton from '@/components/general/InformationButton'
import ProgressStatus from "@/components/graph/ProgressStatus"
function AnalysisProgress({toggleModal}:{toggleModal:()=>void}) {
  return (
    <>
      <CardWrapper>
        <div className="flex flex-row gap-2 items-center mb-2">
          <div className="text-lg">{"Analysis Progress"}</div>
          <InformationButton onClick={toggleModal
          } />


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
    </>
  )
}

export default AnalysisProgress
