import React, { createContext, useState, useEffect, ReactNode } from 'react'

interface AuthContextType {
    user: [];
    token: string | null;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<[]>([])
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken')
    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  const login = async (username: string, password: string) => {
    // Simulación de una API de login
    const response = await fetch('https://tuapi.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    const data = await response.json()
    if (data.token) {
      localStorage.setItem('authToken', data.token)
      setToken(data.token)
      setUser({ username })
    }
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    setToken(null)
    setUser([])
  }

  return (
        <AuthContext.Provider
          value={{
            user,
            token,
            login,
            logout
          }}
        >
            {children}
        </AuthContext.Provider>
  )
}
