export const queryCourses = async (username: string) => {
  const resultArr: Array<any> = []
  const result = await fetch("http://127.0.0.1:5000/query",
    { method: "POST", body: `SELECT  Course.courseID,Teaches.OverallEmotion,isUploaded,name FROM Teaches 
JOIN Course ON Teaches.CourseID = Course.CourseID WHERE emailChula='${username}'` })
  const jsonData = await result.json()
  jsonData.forEach((data: Array<any>) => {
    data[1] = JSON.parse(data[1])
    let sumOfAllEmotion: number = 0
    Object.entries(data[1]).forEach((emotion: any) => {
      sumOfAllEmotion += emotion[1]
    })
   const normalized = Object.fromEntries(Object.entries(data[1]).map((emotion: any) => {
      emotion[1] = emotion[1] / sumOfAllEmotion
      return [emotion[0],emotion[1]]
    }))

    resultArr.push({courseID:data[0],OverallEmotion:normalized,isUploaded:data[2],name:data[3]})

  })

    return resultArr
}


