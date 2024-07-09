import React from 'react'
import { DataTable } from './data-table'
import { getAllUsers } from '../actions';
import { columns } from './columns';


const page =async () => {
  const users = await  getAllUsers()
  console.log(users);
  return (
    <main className='container'>
    
       <DataTable columns={columns} data={users}/>
      </main>
  )
}

export default page