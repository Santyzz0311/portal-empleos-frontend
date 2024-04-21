import { FC } from 'react'
import { NavItemProps } from '../../types'

const NavItem: FC<NavItemProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="mx-4 py-2 px-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
  >
    {label}
  </button>
)

export default NavItem
