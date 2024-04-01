import AnalysisProgressPopUp from "@/components/dashboard/AnalysisProgressPopUp";
async function getData() {
  const review_text = {review_text:"This course in particular was really fun. Not only was the information taught very detailed, the professor mentioned many applications of the topics we learnt to help us grasp how to use it in real world scenarios and in our work. The professor was also super helpful and a great teacher, always checking up on us if we're ok, making clear and concise points, and I really saw all the effort they put in to make everything as simple as possible for us. I'm very grateful that they taught by looking at our point of view making the course super enjoyable and educational."}
  const res = await fetch("http://127.0.0.1:5000/json",{
    method:"POST",
    headers :{"Content-Type": "application/json"},
    body:JSON.stringify(review_text)
  })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default async function Home() {
  const data = await getData()
  console.log(data)
  return (
    <div className='bg-black p-10 text-white'>
    </div>
  );
}
