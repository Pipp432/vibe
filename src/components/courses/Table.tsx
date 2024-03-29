
import React from 'react'
import TableRow from './TableRow'
function Table({toggleModal}:{toggleModal:()=>void}) {
  return (

    <table className='w-[80vw] h-[30vh] shadow-black shadow-md table-fixed'>
      <tbody>
        <tr className='bg-primary text-white text-lg'>
          <th className='w-40'>Course ID</th>
          <th>Course Name</th>
          <th className=''>Semester</th>
          <th>Section</th>
          <th className='w-[40%]'>Data</th>
        </tr>
        <TableRow courseInformation={{
          courseName:'MLDL',
          courseID:'123456',
          section:1,
          semester:'2023/1',
          dataState:1,
        


        }} 
        toggleModal={toggleModal}/>
        <TableRow courseInformation={{
          courseName:'MLDL',
          courseID:'123456',
          section:1,
          semester:'2023/1',
          dataState:2,
          

        }}
        toggleModal={toggleModal}/>
      </tbody>
    </table>
  )
}

export default Table
