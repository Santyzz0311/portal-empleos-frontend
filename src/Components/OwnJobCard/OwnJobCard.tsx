import { FC, useState } from 'react'
import { JobCardProps } from '../../types'
import StyledButton from '../StyledButton'
import ApplicantsModal from '../ApplicantModal/ApplicantModal'

const OwnJobCard: FC<JobCardProps> = ({
  id,
  title,
  description,
  location
}) => {
  const [modal, setModal] = useState<boolean>(false)

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-600 text-sm">{location}</p>
      </div>
      <StyledButton
        text='Ver postulantes'
        onClick={() => setModal(true)}
      />
      {
        modal &&
        <ApplicantsModal
          key={id}
          jobId={id}
          closeModal={() => setModal(false)}
          jobTitle={title}
        />
      }
    </div>
  )
}

export default OwnJobCard
