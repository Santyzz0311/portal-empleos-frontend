import React from 'react'
import { Applies } from '../../types'

interface PostulationCardProps extends Applies {}

const PostulationCard: React.FC<PostulationCardProps> = ({
  jobId,
  jobTitle,
  appliedOn,
  applyDescription,
  jobLocation,
  jobCreatorName,
  jobCreatorEmail
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{jobTitle}</div>
        <p className="text-gray-700 text-base">{applyDescription}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-600 text-sm">{jobLocation}</p>
        <p className="text-gray-600 text-sm">Applied on: {new Date(appliedOn).toLocaleDateString()}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-600 text-sm">Posted by: {jobCreatorName} ({jobCreatorEmail})</p>
      </div>
    </div>
  )
}

export default PostulationCard
