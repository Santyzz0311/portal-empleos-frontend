import { FC, PropsWithChildren } from 'react'

const OptionsBar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-gray-800 text-white py-3 h-16">
      <div className="px-8">
        {children}
      </div>
    </div>
  )
}

export default OptionsBar
