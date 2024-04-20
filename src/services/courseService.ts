import { CourseType } from "../../types"
export const queryCourses = async (username: any) => {
  const result = await fetch("http://127.0.0.1:5000/query",
    {
      method: "POST", body: `SELECT Courses.CourseID, 
Courses.name, Courses.section,Courses.semester,Courses.year,Courses.isUploaded, Courses.department,Courses.faculty FROM Oversees
JOIN Courses ON Oversees.courseID = Courses.courseID WHERE emailChula='${username}'`
    })
  const structuredData:Array<CourseType> = []
  const jsonData:Array<Array<any>> = await result.json()
  jsonData.forEach((dp: any) => {
    const temp: CourseType = {
      courseID: dp[0],
      name: dp[1],
      section: dp[2],
      semester: dp[3],
      year: dp[4],
      isUploaded: dp[5],
      major: dp[6],
      faculty: dp[7],

    }
    structuredData.push(temp)
  })
  return structuredData
}

export const deleteCourseUpload = async (courseID: string, section: number, semester: string, year: string) => {

  const result = await fetch("http://127.0.0.1:5000/query",
    {
      method: "POST", body: `UPDATE Courses SET isUploaded='No' WHERE courseID='${courseID}' AND section='${section}' AND 
semester='${semester}' AND year='${year}'`
    })
  const jsonData = await result.json()
  const data = jsonData
  return data
}
