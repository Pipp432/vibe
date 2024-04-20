export const queryCourses = async (query: string) => {
  const coursesData = await fetch("http://127.0.0.1:5000/query", { method: "POST", body: query })
  const jsonData = await coursesData.json()
  const data: Array<Array<any>> = jsonData
  const result: any = {}
  const tempCourses: any = []
  const tempDates: any = []
  const tempSemesters: any = []
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
  const query = `SELECT  Courses.teachingOrder, Courses.courseMaterialsOrder, Courses.facilitiesOrder, Courses.assessmentsOrder FROM 
                Oversees JOIN Courses ON Oversees.courseID = Courses.courseID WHERE Oversees.emailChula='${loginState.emailChula}'AND Oversees.year = '${year}'
AND Oversees.semester='${semester}' AND Oversees.courseID='${courseID}'`
  const coursesData = await fetch("http://127.0.0.1:5000/query", { method: "POST", body: query })
  const jsonData = await coursesData.json()
  const data = jsonData
  const resultArr = []
  for (let i = 0; i < 4; i++) {
    const topThree: Array<string> = data[0][i].split(",")
    for(let j=0;j<3;j++){
      topThree[j] = topThree[j].replace(" ","")
    }
    const response = await fetch("http://127.0.0.1:5000/query",
      {
        method: "POST", body: `select ${topThree[0]},${topThree[1]},${topThree[2]} from Courses
        where courseID = '${courseID}' and section = '1' and semester = '${semester}' and year = '${year}';`
      })
    const score = await response.json()
    const tempResultObj: { [key: string]: any } = {}
    const tempObj: { [key: string]: number } = {}
    topThree.forEach((emotion: string, index: number) => {
      tempObj[emotion.replace("total", "")] = score[0][index]
    })
    tempObj["Other"] = 1 - (score[0][0] + score[0][1] + score[0][2])
    tempResultObj["emotion"] = tempObj
    resultArr.push(tempResultObj)
  }

  const queryCourseInfo = `SELECT  Courses.name, Courses.satisfactionScore FROM 
                Oversees JOIN Courses ON Oversees.courseID = Courses.courseID WHERE Oversees.emailChula='${loginState.emailChula}'AND Oversees.year = '${year}'
AND Oversees.semester='${semester}' AND Oversees.courseID='${courseID}'`

  const coursesInfo= await fetch("http://127.0.0.1:5000/query", { method: "POST", body: queryCourseInfo })
  const coursesInfoJson:Array<any> = await coursesInfo.json()
  console.log(coursesInfoJson)
  if (data) {
    const result = {
      name: coursesInfoJson[0][0],
      courseID: courseID,
      EmotionScore: coursesInfoJson[0][1] * 100,
      teaching: resultArr[0].emotion,
      courseMaterials: resultArr[1].emotion,
      facilities: resultArr[2].emotion,
      assessments: resultArr[3].emotion,
    }
    console.log(result)
    return result
  }
  else {
    return []
  }
}

export const queryComments = async (loginState: any, courseID: string, semester: string, year: string) => {
  const query = `SELECT * FROM Comments 
  JOIN Courses ON Comments.courseID = Courses.courseID 
  JOIN Oversees ON Comments.courseID = Oversees.courseID
WHERE Oversees.emailChula = '${loginState.emailChula}' AND Oversees.courseID ='${courseID}' AND Comments.semester='${semester}' AND Comment.year='${year}'`
  const commentData = await fetch("http://127.0.0.1:5000/query", { method: "POST", body: query })
  const jsonData = await commentData.json()
  console.log(jsonData)
}
