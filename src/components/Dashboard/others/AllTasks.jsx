import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

function AllTasks() {
  const authData = useContext(AuthContext)
  const employees = authData?.employees || []

  return (
    <div id='alltask' className='w-full h-48 bg-zinc-900'>
      <div className='bg-red-400 rounded flex justify-between items-center p-2 m-2'>
        <h5 className='font-semibold text-md w-1/5 flex justify-center'>Employee Name</h5>
        <h5 className='font-semibold text-md w-1/5 flex justify-center'>New Task</h5>
        <h5 className='font-semibold text-md w-1/5 flex justify-center'>Active Tasks</h5>
        <h5 className='font-semibold text-md w-1/5 flex justify-center'>Completed</h5>
        <h5 className='font-semibold text-md w-1/5 flex justify-center'>Failed</h5>
      </div>
      <div className='h-[80%] overflow-auto'>
        {employees.map((employee, index) => {
          const counts = (employee.tasks || []).reduce((result, task) => {
            if (task.newTask) result.newTask++
            if (task.active) result.active++
            if (task.completed) result.completed++
            if (task.failed) result.failed++
            return result
          }, { newTask: 0, active: 0, completed: 0, failed: 0 })
          return <div key={employee.id ?? index} className='bg-zinc-800 border border-blue-300 rounded flex justify-between items-center p-2 m-2'>
            <h2 className='text-purple-400 w-1/5 font-medium flex justify-center'>{employee.name}</h2>
            <h3 className='text-red-500 w-1/5 flex font-medium justify-center'>{counts.newTask}</h3>
            <h5 className='text-green-600 w-1/5 flex font-medium justify-center'>{counts.active}</h5>
            <h5 className='text-blue-600 w-1/5 flex font-medium justify-center'>{counts.completed}</h5>
            <h5 className='text-yellow-500 w-1/5 flex font-medium justify-center'>{counts.failed}</h5>
          </div>
        })}
      </div>
    </div>
  )
}
export default AllTasks
