import React, { useContext } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'

function TaskList({ data }) {
  const { employees = [], updateEmployees } = useContext(AuthContext)
  const onStatusChange = (taskIndex, status) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id !== data.id) return employee
      const tasks = employee.tasks.map((task, index) => index !== taskIndex ? task : ({
        ...task, active: status === 'active', newTask: false,
        completed: status === 'completed', failed: status === 'failed',
      }))
      const taskCounts = tasks.reduce((counts, task) => {
        if (task.newTask) counts.newTask++
        if (task.active) counts.active++
        if (task.completed) counts.completed++
        if (task.failed) counts.failed++
        return counts
      }, { newTask: 0, active: 0, completed: 0, failed: 0 })
      return { ...employee, tasks, taskCounts }
    })
    updateEmployees(updatedEmployees)
  }
  return <div id='tasklist' className='w-full h-[50%] mt-4 flex flex-nowrap overflow-auto'>
    {(data.tasks || []).map((task, index) => {
      const props = { data: task, taskIndex: index, onStatusChange }
      if (task.active) return <AcceptTask key={task.id || `${task.taskTitle}-${index}`} {...props} />
      if (task.newTask) return <NewTask key={task.id || `${task.taskTitle}-${index}`} {...props} />
      if (task.completed) return <CompleteTask key={task.id || `${task.taskTitle}-${index}`} {...props} />
      if (task.failed) return <FailedTask key={task.id || `${task.taskTitle}-${index}`} {...props} />
      return null
    })}
  </div>
}
export default TaskList
