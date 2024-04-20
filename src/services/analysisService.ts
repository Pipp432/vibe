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
  try {
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
      for (let j = 0; j < 3; j++) {
        topThree[j] = topThree[j].replace(" ", "")
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

    const coursesInfo = await fetch("http://127.0.0.1:5000/query", { method: "POST", body: queryCourseInfo })
    const coursesInfoJson: Array<any> = await coursesInfo.json()
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
      return result
    }
    else {
      return []
    }
  }
  catch {
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
}
export const queryAnalysisChartData = async (courseID: string) => {

  const response = await fetch("http://127.0.0.1:5000/query",
    {
      method: "POST", body: `SELECT 
  Emotions.emotion,
  COALESCE(emotion_data.emotionCount, 0) AS emotionCount
FROM (
  SELECT 'approval' AS emotion
  UNION ALL SELECT 'disappointment'
  UNION ALL SELECT 'joy'
  UNION ALL SELECT 'anger'
  UNION ALL SELECT 'neutrality'
  UNION ALL SELECT 'disapproval'
  UNION ALL SELECT 'confusion'
  UNION ALL SELECT 'admiration'
  UNION ALL SELECT 'gratitude'
) AS Emotions
LEFT JOIN (
  SELECT 
    SUBSTRING_INDEX(
      SUBSTRING_INDEX(
        SUBSTRING(emotionScore FROM LOCATE(':', emotionScore) + 1), 
        '"', 2),
      '"', -1) AS emotion,
    COUNT(*) AS emotionCount
  FROM 
    Comments
  WHERE 
    CourseID = '${courseID}' AND 
    Semester = '2' AND
    Section = '1' AND
    Year = '2024' AND
    emotionScore LIKE '%"%"%' AND 
    LOCATE(':', emotionScore) > 0
  GROUP BY 
    emotion
) AS emotion_data ON Emotions.emotion = emotion_data.emotion
ORDER BY 
  emotionCount DESC;`
    })
  const data = await response.json()
  return data
} 
