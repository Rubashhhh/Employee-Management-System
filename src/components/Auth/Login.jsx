import React, { useState } from 'react'

function Login({handleLogin, error}) {
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email, password)
    }

     
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
        <div className='border-2 border-emerald-400 rounded'>
        <form className='flex flex-col justify-center items-center p-6 bg-zinc-900'
         onSubmit={(e)=>{
            submitHandler(e)
        }}>

        <input
        className='text-white bg-zinc-800 rounded-xl border-2 border-emerald-700 m-2'
        required
        type='email'
        value={email}
        placeholder='Enter the email'
        onChange={(e)=>{
            setEmail(e.target.value)
        }}
        />
        <input
        className='text-white bg-zinc-800 rounded-xl border-2 border-emerald-700 m-2'
        required
        type='password'
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
        />
        {error && <p role='alert' className='text-red-400 text-sm mt-2'>{error}</p>}
        <button
        className='text-white bg-emerald-700 rounded-full font-medium border-none p-1 m-2'
         >
            Log In
        </button>

        </form>
        </div>

    </div>
  )
}

export default Login