import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

function App() {
  const authData = useContext(AuthContext)
  const [session, setSession] = useState(() => {
    try {
      const saved = localStorage.getItem('loggedInUser')
      return saved ? JSON.parse(saved) : null
    } catch {
      localStorage.removeItem('loggedInUser')
      return null
    }
  })
  const [loginError, setLoginError] = useState('')

  const handleLogin = (email, password) => {
    const normalizedEmail = email.trim().toLowerCase()
    const admin = authData?.admin?.find((item) => item.email.toLowerCase() === normalizedEmail && item.password === password)
    const employee = authData?.employees?.find((item) => item.email.toLowerCase() === normalizedEmail && item.password === password)
    const nextSession = admin
      ? { role: 'admin', email: admin.email }
      : employee
        ? { role: 'employee', email: employee.email }
        : null

    if (!nextSession) {
      setLoginError('Invalid email or password. Please try again.')
      return false
    }

    localStorage.setItem('loggedInUser', JSON.stringify(nextSession))
    setSession(nextSession)
    setLoginError('')
    return true
  }

  const handleUpdateAdminName = (newName) => {
    const trimmedName = newName.trim()
    if (!trimmedName || session?.role !== 'admin') return false

    const updatedAdmins = authData.admin.map((admin) =>
      admin.email === session.email ? { ...admin, name: trimmedName } : admin
    )
    authData.updateAdmin(updatedAdmins)
    return true
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setSession(null)
  }

  useEffect(() => {
    // Clear a session if its account no longer exists in the saved demo data.
    if (!session) return
    const users = session.role === 'admin' ? authData?.admin : authData?.employees
    if (users && !users.some((item) => item.email === session.email)) handleLogout()
  }, [authData, session])

  if (!session || !authData) return <Login handleLogin={handleLogin} error={loginError} />
  if (session.role === 'admin') {
    const admin = authData.admin?.find((item) => item.email === session.email)
    return admin ? <AdminDashboard changeUser={handleLogout} data={admin} onUpdateName={handleUpdateAdminName} /> : <Login handleLogin={handleLogin} error={loginError} />
  }
  const employee = authData.employees?.find((item) => item.email === session.email)
  return employee ? <EmployeeDashboard changeUser={handleLogout} data={employee} /> : <Login handleLogin={handleLogin} error={loginError} />
}

export default App
