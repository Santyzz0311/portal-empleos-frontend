import React, { useState, FormEvent } from 'react'

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<{ username?: string, password?: string }>({})

  const validateForm = () => {
    let valid = true
    const newErrors: { username?: string, password?: string } = {}

    if (!username) {
      valid = false
      newErrors.username = 'El usuario es requerido'
    }

    if (!password) {
      valid = false
      newErrors.password = 'La contrasena es requerida'
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (validateForm()) {
      onLogin(username, password)
    }
  }

  return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-center">Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="username">Usuario</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {errors.username && <p className="text-xs text-red-600">{errors.username}</p>}
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="password">Contrasena</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <p className="text-xs text-red-600">{errors.password}</p>}
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <button
                                type="submit"
                                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Login
