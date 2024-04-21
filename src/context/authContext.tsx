import React, { createContext, useEffect, useState } from 'react'
import { AuthContextType, AuthProviderProps, User } from '../types'

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>()
  const [token, setToken] = useState<string>('')
  const [activeTab, setActiveTab] = useState<string>(() => {
    return user?.roleName.toLowerCase() === 'postulante'
      ? 'apply'
      : 'ownJobs'
  })

  // const fetchUserData = async (token: string): Promise<void> => {
  //   try {
  //     const response = await fetch('https://localhost:7267/auth/validate_token', {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     })
  //     if (response.ok) {
  //       const data = await response.json()
  //       setUser(data.user)
  //     } else {
  //       console.log('Token validation failed:', response.status)
  //     }
  //   } catch (error) {
  //     console.error('Error fetching user data:', error)
  //   }
  // }

  // useEffect(() => {
  //   const checkAuth = () => {
  //     const token = localStorage.getItem('authToken')
  //     if (token) {
  //       setToken(token)
  //       fetchUserData(token)
  //     }
  //   }

  //   checkAuth()
  // }, [])

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('https://localhost:7267/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        const data = await response.json()

        if (data.token && data.user) {
          localStorage.setItem('authToken', data.token)
          setUser(data.user)
          setToken(data.token)
        } else {
          console.error('Login failed: Invalid response data')
        }
      } else {
        console.error('Login failed:', response.status)
      }
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    setToken('')
    setUser(undefined)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        activeTab,
        setActiveTab
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
