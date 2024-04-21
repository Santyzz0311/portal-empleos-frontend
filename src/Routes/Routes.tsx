import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../Pages/Login'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import Home from '../Pages/Home'

export default function AppRoutes () {
  const { token } = useContext(AuthContext)!

  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <Navigate to="/home" replace /> : <Login />} />
        <Route path="/home" element={!token ? <Navigate to="/" replace /> : <Home />} />
      </Routes>
    </Router>
  )
}
