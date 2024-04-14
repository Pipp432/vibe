
const queryCourses = async (query: string) => {
  const coursesData = await fetch("http://127.0.0.1:5000/query_user", { method: "POST", body: query })
  const jsonData = await coursesData.json()
  const data: Array<Array<any>> = jsonData
  const result: any = {}
  const tempCourses: any = []
  const tempDates: any = []
  data.forEach((dataPoint: Array<any>) => {
    tempCourses.push(dataPoint[0].toString())
    if (!tempDates.includes(dataPoint[3])) tempDates.push(dataPoint[3])
  })
  result['courses'] = tempCourses
  result['dates'] = tempDates
  console.log(result)
  return result
}

const queryCourseInformation = async (query: string) => {
  const courseData = await fetch("http://127.0.0.1:5000/query_user", { method: "POST", body: query })
  const jsonData = await courseData.json()
  const courseInformation = jsonData[0]
  
  return courseInformation

}

export default queryCourses

