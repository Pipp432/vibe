export const queryCourses = async(username:any)=>{
  const result = await fetch("http://127.0.0.1:5000/query", 
    { method: "POST", body: `SELECT * FROM Teaches
JOIN Course ON Teaches.courseID = Course.courseID WHERE emailChula='${username}'` })
  const jsonData = await result.json()
  const data = jsonData
  return data
}
