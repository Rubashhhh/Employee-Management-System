import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

function CreateTask() {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const { employees = [], updateEmployees } = useContext(AuthContext)

  const submitHandler = (e) => {
    e.preventDefault()
    setMessage('')
    setError('')
    if (!taskTitle.trim() || !taskDescription.trim() || !taskDate || !assignTo || !category.trim()) {
      setError('Please complete all fields before creating the task.')
      return
    }
    const task = {
      id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      taskTitle: taskTitle.trim(), description: taskDescription.trim(), date: taskDate,
      category: category.trim(), active: false, newTask: true, failed: false, completed: false,
    }
    const updatedEmployees = employees.map((employee) => employee.id === Number(assignTo)
      ? { ...employee, tasks: [...(employee.tasks || []), task] }
      : employee)
    updateEmployees(updatedEmployees)
    setTaskTitle(''); setTaskDate(''); setAssignTo(''); setCategory(''); setTaskDescription('')
    setMessage('Task created successfully.')
  }

  return (
    <div>
      <form className='bg-zinc-800 flex m-8 p-8 gap-8 justify-between items-start' onSubmit={submitHandler}>
        <div className='flex flex-col w-1/2 text-sm'>
          <h3>Task Title</h3>
          <input required value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} type='text' placeholder='Enter your task' className='bg-transparent border p-1' /><br />
          <h3>Date</h3>
          <input required min={new Date().toISOString().slice(0, 10)} value={taskDate} onChange={(e) => setTaskDate(e.target.value)} type='date' className='bg-transparent border p-1' /><br />
          <h3>Assigned to</h3>
          <select required value={assignTo} onChange={(e) => setAssignTo(e.target.value)} className='bg-zinc-800 border p-1'>
            <option value=''>Select employee</option>
            {employees.map((employee) => <option key={employee.id} value={employee.id}>{employee.name} ({employee.email})</option>)}
          </select><br />
          <h3>Category</h3>
          <input required value={category} onChange={(e) => setCategory(e.target.value)} type='text' placeholder='Design, Development, etc.' className='bg-transparent border p-1' />
        </div>
        <div className='flex flex-col w-1/2'>
          <h3>Description</h3>
          <textarea required value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} className='h-48 bg-transparent border p-1' placeholder='Describe the work' />
          {error && <p role='alert' className='text-red-400 text-sm mt-2'>{error}</p>}
          {message && <p role='status' className='text-green-400 text-sm mt-2'>{message}</p>}
          <button type='submit' className='mt-2 bg-green-500 p-2 rounded'>Create Task</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
