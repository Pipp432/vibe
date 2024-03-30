type EmotionChartData = {
  id:number,
  emotion:string
  evaluations:number
}

export const analysisData:Array<EmotionChartData>=[
  {
    id: 1,
    emotion: "😁",
    evaluations: 500,
    
  },
  {
    id: 2,
    emotion: "joy",
    evaluations: 200,
  },
  {
    id: 3,
    emotion: "confusion",
    evaluations: 600,
  },
  {
    id: 4,
    emotion: "approval",
    evaluations: 400,
  },
  {
    id: 5,
    emotion: "disapproval",
    evaluations: 1000,
  }
]
