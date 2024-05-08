import { CourseType } from "../../types"
export const queryCourses = async (username: any) => {
  const result = await fetch("http://127.0.0.1:5000/query",
    {
      method: "POST", body: `
select C.courseID, C.name, C.section, C.semester, C.year, C.isUploaded, C.department, C.faculty
from Oversees S
inner join Courses C
on S.courseID = C.courseID and S.section = C.section and C.semester = S.semester and C.year = S.year
where emailChula = '${username}';
`    })
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

  const result = await fetch("http://127.0.0.1:5000/update",
    {
      method: "POST", body: `UPDATE Courses SET isUploaded='No' WHERE courseID=${courseID} AND section=${section} AND 
semester=${semester} AND year=${year}`
    })
  const jsonData = await result.json()
  const data = jsonData
  console.log(data)
  return data
}
