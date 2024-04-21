import { FC } from 'react'
import NavItem from '../NavItem'
import useNavBar from '../../hooks/useNavBar'
import FloatMenu from '../FloatMenu'

const Navbar: FC = () => {
  const {
    user,
    isMenuOpen,
    logOutRef,
    setActiveTab,
    handleLogout,
    toggleUserMenu
  } = useNavBar()

  return (
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
              <NavItem label="Mis Trabajos" onClick={() => setActiveTab('ownJobs')} />
            )}
      </div>
      <div className="relative" ref={logOutRef}>
        <NavItem label={user?.name} onClick={() => toggleUserMenu()} />
        {isMenuOpen && (
          <FloatMenu
            roleName={user?.roleName}
            handleLogout={handleLogout}
          />
        )}
      </div>
    </nav>
  )
}

export default Navbar
