export const sortObject = (obj:{string:number}) => {
  const sorted = Object.entries(obj).sort((a,b)=>{return b[1]-a[1]})
  return sorted
}

