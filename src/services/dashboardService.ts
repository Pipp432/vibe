export const queryCourses = async (username: string) => {
  const resultArr: Array<any> = []
  const courses = await fetch("http://127.0.0.1:5000/query", {
    method: "POST", body: `select Courses.courseID, Courses.section, Courses.isUploaded,Courses.name from Courses JOIN 
    Oversees ON Courses.courseID = Oversees.courseID where Oversees.emailChula='${username}' AND Courses.courseID = '2143499'`
  })
  const coursesData = await courses.json()
  if (coursesData.length > 0) {
    for (let i = 0; i < coursesData.length; i++) {
      const course = coursesData[i]
      const result = await fetch("http://127.0.0.1:5000/query", {
        method: "POST", body: `select totalOrder from Courses 
        where CourseID = '${course[0]}' and section = '${course[1]}' and semester = '2' and Courses.year = '2024';`
      })
      const topThreeEmotionString: Array<Array<string>> = await result.json();
      const topThreeEmotion: Array<string> = (topThreeEmotionString[0][0]).split(",")
      const response = await fetch("http://127.0.0.1:5000/query",
        {
          method: "POST", body: `select ${topThreeEmotion[0]},${topThreeEmotion[1]},${topThreeEmotion[2]} from Courses
          where CourseID = '${course[0]}' and section = '${course[1]}' and semester = '2' and Courses.year = '2024';`
        })
      const score = await response.json()
      const tempResultObj: { [key: string]: any } = {}
      const tempObj: { [key: string]: number } = {}
      topThreeEmotion.forEach((emotion: string, index: number) => {
        tempObj[emotion.replace("total", "")] = score[0][index]
      })
      tempObj["Other"] = 1 - (score[0][0] + score[0][1] + score[0][2])
      tempResultObj["emotion"] = tempObj
      tempResultObj["courseID"] = course[0]
      tempResultObj["isUploaded"] = course[2]
      tempResultObj["name"] = course[3]
      resultArr.push(tempResultObj)
    }
  }

  return resultArr
}

export const queryProfessorChartData = async (emailChula: string) => {

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
        SUBSTRING(c.emotionScore FROM LOCATE(':', c.emotionScore) + 1), 
        '"', 2),
      '"', -1) AS emotion,
    COUNT(*) AS emotionCount
  FROM 
    Comments c
  JOIN
    Oversees o ON o.CourseID = c.CourseID AND o.Semester = c.Semester AND o.Year = c.Year AND o.Section = c.Section
  WHERE 
    o.emailChula = '${emailChula}' AND
    c.emotionScore LIKE '%"%"%' AND 
    LOCATE(':', c.emotionScore) > 0
  GROUP BY 
    emotion
) AS emotion_data ON Emotions.emotion = emotion_data.emotion
ORDER BY 
  emotionCount DESC;`
    })
  const data = await response.json()
  console.log(data)
  return data
} 
