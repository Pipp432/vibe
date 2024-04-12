const queryUserData = async (username:string) => {
  const userData = await fetch("http://127.0.0.1:5000/query_user", { method: "POST", body: username })
  const jsonData = await userData.json()
  const data:Array<any> = jsonData[0]
  return data
}

export default queryUserData 

