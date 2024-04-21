import React, { useState } from 'react'
import ApplyModal from '../ApplyModal'
import { JobCardProps } from '../../types'
import StyledButton from '../StyledButton'

const JobCard: React.FC<JobCardProps> = ({
  id: idJob,
  title,
  description,
  location,
  creatorUserName,
  creatorEmail,
  categoryName,
  hasApplied
}) => {
  const [modal, setModal] = useState<boolean>(false)

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-4">
          {description}
        </p>
        <p className="text-gray-600 text-xs">{location}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{categoryName}</span>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Posted by: {creatorUserName}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{creatorEmail}</span>
      </div>
      <footer className="px-6 pt-4 pb-2">
        <StyledButton
          onClick={() =>
            setModal(true)
          }
          disabled={hasApplied}
          text={hasApplied ? 'Usted ya aplicó a este trabajo' : 'Aplicar'}
        />
        {
          modal && (
            <ApplyModal
              idJob={idJob}
              jobTitle={title}
              jobDescription={description}
              userName={creatorUserName}
              setModal={setModal}
            />
          )
        }
      </footer>
    </div>
  )
}

export default JobCard
