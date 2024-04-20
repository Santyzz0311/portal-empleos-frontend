import React from 'react'
import { JobCardProps } from '../../types'

const OwnJobCards: React.FC<JobCardProps> = ({
  title,
  description,
  location
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-600 text-sm">{location}</p>
      </div>
    </div>
  )
}

export default OwnJobCards
