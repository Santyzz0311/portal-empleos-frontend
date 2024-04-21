import { FC } from 'react'

interface FloatMenuProps { handleLogout: () => void; roleName: string }

const FloatMenu: FC<FloatMenuProps> = ({ handleLogout, roleName }) => {
  return (
    <div className="absolute right-0 w-48 bg-white shadow-md mt-2 rounded-lg py-1 text-black">
      <span
        className="w-full text-left px-4 py-2 inline-block pointer-events-none"
      >
        Tu rol: {roleName}
      </span>
      <button
        onClick={handleLogout}
        className="w-full text-left px-4 py-2 hover:bg-gray-200"
      >
        Desconectarse
      </button>
    </div>
  )
}

export default FloatMenu
