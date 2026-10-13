import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext(null)

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(() => {
    setLocalStorage()
    return getLocalStorage()
  })

  useEffect(() => {
    const data = getLocalStorage()
    setUserData(data)
  }, [])

  const updateEmployees = (updatedEmployees) => {
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    setUserData((prev) => ({ ...prev, employees: updatedEmployees }))
  }

  const updateAdmin = (updatedAdmin) => {
    localStorage.setItem('admin', JSON.stringify(updatedAdmin))
    setUserData((prev) => ({ ...prev, admin: updatedAdmin }))
  }

  return (
    <AuthContext.Provider value={{ ...userData, updateEmployees, updateAdmin }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
