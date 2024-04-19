import './App.css'
import Routes from './Routes'
import { AuthProvider } from './context/authContext'

function App () {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
