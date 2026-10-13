import React from 'react'
function TaskListNumbers({ data }) {
  const counts = (data.tasks || []).reduce((result, task) => {
    if (task.newTask) result.newTask++
    if (task.active) result.active++
    if (task.completed) result.completed++
    if (task.failed) result.failed++
    return result
  }, { newTask: 0, active: 0, completed: 0, failed: 0 })
  return <div className='flex justify-between items-center gap-2 mt-2 px-2'>
    <div className='w-[45%] bg-red-400 text-white p-2 rounded'><h1 className='text-2xl font-semibold'>{counts.newTask}</h1><h2>New Task</h2></div>
    <div className='w-[45%] bg-blue-400 text-white p-2 rounded'><h1 className='text-2xl font-semibold'>{counts.completed}</h1><h2>Completed Task</h2></div>
    <div className='w-[45%] bg-green-400 text-white p-2 rounded'><h1 className='text-2xl font-semibold'>{counts.active}</h1><h2>Accepted Task</h2></div>
    <div className='w-[45%] bg-yellow-400 text-white p-2 rounded'><h1 className='text-2xl font-semibold'>{counts.failed}</h1><h2>Failed Task</h2></div>
  </div>
}
export default TaskListNumbers
