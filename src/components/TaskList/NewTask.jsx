import React from 'react'
function NewTask({ data, onStatusChange, taskIndex }) {
  return <div className='rounded w-[300px] m-3 bg-red-400 flex-shrink-0'>
    <div className='flex justify-between items-center p-1'><h3 className='bg-red-600 rounded text-sm px-3 py-1 font-semibold w-fit m-2'>{data.category}</h3><h4 className='text-sm mr-1'>{data.date}</h4></div>
    <h1 className='text-xl font-semibold px-2'>{data.taskTitle}</h1><h3 className='text-sm mt-2 px-2'>{data.description}</h3>
    <div className='mt-4 flex justify-between items-center px-2 pb-4'><button onClick={() => onStatusChange(taskIndex, 'active')} className='bg-green-600 px-2 py-1 text-xs rounded'>Accept Task</button><button onClick={() => onStatusChange(taskIndex, 'failed')} className='bg-red-600 px-2 py-1 text-xs rounded'>Reject Task</button></div>
  </div>
}
export default NewTask
