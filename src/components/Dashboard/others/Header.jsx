import React, { useState } from 'react'

function Header(props) {
  const [editingName, setEditingName] = useState(false)
  const [name, setName] = useState(props.data?.name || '')
  const [nameError, setNameError] = useState('')

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser('')
  }

  const saveName = (event) => {
    event.preventDefault()
    const saved = props.onUpdateName?.(name)
    if (!saved) {
      setNameError('Please enter a valid name.')
      return
    }
    setNameError('')
    setEditingName(false)
  }

  return (
    <div className='bg-zinc-900 w-screen flex justify-between items-start'>
      <div className='flex justify-between items-end w-full h-fit m-4'>
        <div>
          <h1 className='text-white font-medium text-xl'>Hello,</h1>
          {!editingName ? (
            <div className='flex items-center gap-3'>
              <span className='text-white font-semibold text-2xl'>{props.data?.name} 👋</span>
              {props.data && props.onUpdateName && (
                <button type='button' className='text-emerald-400 text-sm underline' onClick={() => { setName(props.data.name || ''); setEditingName(true) }}>
                  Edit name
                </button>
              )}
            </div>
          ) : (
            <form onSubmit={saveName} className='flex flex-wrap items-center gap-2 mt-1'>
              <input aria-label='Admin name' className='bg-zinc-800 text-white border border-emerald-700 rounded px-2 py-1' value={name} onChange={(event) => setName(event.target.value)} maxLength={60} autoFocus />
              <button type='submit' className='bg-emerald-700 text-white rounded px-2 py-1 text-sm'>Save</button>
              <button type='button' className='text-zinc-300 text-sm underline' onClick={() => { setEditingName(false); setNameError('') }}>Cancel</button>
              {nameError && <p role='alert' className='text-red-400 text-sm w-full'>{nameError}</p>}
            </form>
          )}
        </div>
        <button className='bg-red-700 text-white rounded-md px-2 py-1 font-medium mr-3' onClick={logOutUser}>Log Out</button>
      </div>
    </div>
  )
}

export default Header
