// utils/Data.js

type EmotionChartData = {
  id:number,
  emotion:string
  evaluations:number
}
export const Data:Array<EmotionChartData> = [
  {
    id: 1,
    emotion: "angry",
    evaluations: 800,
    
  },
  {
    id: 2,
    emotion: "joy",
    evaluations: 800,
  },
  {
    id: 3,
    emotion: "confusion",
    evaluations: 800,
  },
  {
    id: 4,
    emotion: "approval",
    evaluations: 800,
  },
  {
    id: 5,
    emotion: "disapproval",
    evaluations: 800,
  }
];
