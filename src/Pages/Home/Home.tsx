import { FC, useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import ApplyJob from '../../Components/ApplyJob/ApplyJob'
import { NavItemProps } from '../../types'
import Postulation from '../../Components/Postulation'
import ViewApplies from '../../Components/ViewApplies'

const NavItem: FC<NavItemProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="mx-4 py-2 px-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
  >
    {label}
  </button>
)

const Home: FC = () => {
  const { user, logout } = useContext(AuthContext)!
  const [activeTab, setActiveTab] = useState(() => {
    return user?.roleName.toLowerCase() === 'Postulante'
      ? 'apply'
      : 'viewApplies'
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
  }

  const toggleUserMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div>
          {user?.roleName?.toLowerCase() === 'postulante'
            ? (
              <>
                <NavItem label="Trabajos Disponibles" onClick={() => setActiveTab('apply')} />
                <NavItem label="Mis Postulaciones" onClick={() => setActiveTab('postulation')} />
              </>
              )
            : (
              <>
                <NavItem label="Ver Postulaciones" onClick={() => setActiveTab('createJob')} />
                <NavItem label="Candidatos" onClick={() => setActiveTab('candidates')} />
              </>
              )}
        </div>
        <div className="relative" ref={ref}>
          <button
            onClick={toggleUserMenu}
            className="py-2 px-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
          >
            {user?.name}
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 w-48 bg-white shadow-md mt-2 rounded-lg py-1 text-black">
              <span
                className="w-full text-left px-4 py-2 inline-block pointer-events-none"
              >
                Tu rol: {user?.roleName}
              </span>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
      <div className="flex-grow border-t-2 border-blue-500">
        {
          activeTab === 'apply'
            ? <ApplyJob />
            : activeTab === 'postulation'
              ? <Postulation />
              : activeTab === 'createJob'
                ? <ViewApplies />
                : null
        }
      </div>
    </div>
  )
}

export default Home
