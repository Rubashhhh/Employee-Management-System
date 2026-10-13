import React from 'react'
import Header from './others/Header'
import CreateTask from './others/CreateTask'
import AllTasks from './others/AllTasks'

function AdminDashboard(props) {
  return (
    <div>
        <Header changeUser={props.changeUser} data={props.data} onUpdateName={props.onUpdateName}/>
        <CreateTask/>
        <AllTasks/>
    </div>
  )
}

export default AdminDashboard