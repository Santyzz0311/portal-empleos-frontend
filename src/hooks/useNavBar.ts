import { useState, useEffect, useContext, useRef } from 'react'
import { AuthContext } from '../context/authContext'

export default function useNavBar() {
  const { user, logout, activeTab, setActiveTab } = useContext(AuthContext)!

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleLogout = (): void => {
    logout()
  }

  const toggleUserMenu = (): void => {
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

  return {
    user,
    logOutRef: ref,
    activeTab,
    isMenuOpen,
    setActiveTab,
    handleLogout,
    toggleUserMenu
  }
}
