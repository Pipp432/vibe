
import React from 'react'
import TableRow from './TableRow'
function Table({ toggleModal }: { toggleModal: () => void }) {
  return (

    <table className='w-[80vw] h-[30vh] shadow-black shadow-md table-fixed'>
      <tbody>
        <tr className='bg-primary text-white text-lg'>
          <th className='w-[10%]'>Course ID</th>
          <th className='w-[15%]'>Course Name</th>
          <th className='w-[15%]'>Semester</th>
          <th className='w-[5%]'>Section</th>
          <th className='w-[60%]'>Data</th>
        </tr>
        <TableRow courseInformation={{
          name: 'MLDL',
          courseID: '123456',
          section: 1,
          semester: '1',
          year:"2020",
          major:"ICE",
          faculty:'Enigneering',
          isUpload: 0

        }}
          toggleModal={toggleModal} />
        <TableRow courseInformation={{
          name: 'MLDL',
          courseID: '123456',
          section: 1,
          semester: '1',
          year:"2020",
          major:"ICE",
          faculty:'Enigneering',
          isUpload: 1

        }}
          toggleModal={toggleModal} />
      </tbody>
    </table>
  )
}

export default Table
