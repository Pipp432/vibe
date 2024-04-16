export const queryCourses = async (query: string) => {
  const coursesData = await fetch("http://127.0.0.1:5000/query", { method: "POST", body: query })
  const jsonData = await coursesData.json()
  const data: Array<Array<any>> = jsonData
  const result: any = {}
  const tempCourses: any = []
  const tempDates: any = []
  const tempSemesters:any=[]
  data.forEach((dataPoint: Array<any>) => {
    tempCourses.push(dataPoint[0].toString())
    if (!tempDates.includes(dataPoint[3])) tempDates.push(dataPoint[3])
    if (!tempSemesters.includes(dataPoint[2])) tempSemesters.push(dataPoint[2])
  })
  result['courses'] = tempCourses
  result['dates'] = tempDates
  result['semesters'] = tempSemesters
  return result
}

export const queryCourseInformation = async (form: Array<string>, loginState: any) => {

  const year = form[0].split("/")[0]
  const semester = form[0].split("/")[1]
  const courseID = form[1]
  const query = `SELECT Course.name ,Teaches.courseID ,Teaches.EmotionScore, Teaches.ContextnEmotion FROM 
                Teaches JOIN Course ON Teaches.courseID = Course.courseID WHERE Teaches.emailChula='${loginState.emailChula}'AND Teaches.year = '${year}' AND Teaches.semester='${semester}' AND Teaches.courseID='${courseID}'`
  const coursesData = await fetch("http://127.0.0.1:5000/query", { method: "POST", body: query })
  const jsonData = await coursesData.json()
  const data = jsonData[0]
  const result = {
    name: data[0],
    courseID:data[1],
    EmotionScore:data[2] * 100,
    ContextnEmotion :JSON.parse(data[3])
  }
  return result
}


