import { FC, useEffect, useState } from 'react'
import ApplicantItem from '../ApplicantItem'
import { Applicant } from '../../types'
import { getApplicantsByJobId } from '../../services/applicants'

interface ApplicationModalProps {
  jobId: number;
  closeModal: () => void;
  jobTitle: string;
}

const ApplicantsModal: FC<ApplicationModalProps> = ({ jobId, closeModal, jobTitle }) => {
  const [applicants, setApplicants] = useState<Applicant[]>([])

  useEffect(() => {
    getApplicantsByJobId({ jobId })
      .then(applicants => setApplicants(applicants))
      .catch(e => console.error(e))
  }, [])

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className='flex justify-between'>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Postulantes de: {jobTitle}</h3>
          <span className='inline-block font-bold cursor-pointer' onClick={closeModal}>X</span>
        </div>
        {
          applicants?.length === 0
            ? <div>No hay usuarios postulados por el momento</div>
            : (
                applicants?.map((applicant: Applicant) => (
              <>
                <ApplicantItem
                  key={applicant.id}
                  applicationDate={applicant.applyDate}
                  applicantName={applicant.userName}
                  applicantDescription={applicant.description}
                />
                <div className='h-1 bg-black' />
              </>
                ))
              )
        }
      </div>
    </div>
  )
}

export default ApplicantsModal
