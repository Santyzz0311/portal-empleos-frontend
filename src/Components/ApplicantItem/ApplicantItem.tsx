import { FC, useState } from 'react'
import StyledButton from '../StyledButton'

interface ApplicantItemProps {
  applicationDate: Date;
  applicantName: string;
  applicantDescription: string;
}

const ApplicantItem: FC<ApplicantItemProps> = ({ applicationDate, applicantName, applicantDescription }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = () => {}

  return (
    <div className="h-full px-2 py-3 flex flex-col gap-y-3">
      <div className='flex justify-between items-center' onClick={() => setIsOpen(!isOpen)}>
        <span className='inline-block'>{applicantName}</span>
        <span className='inline-block font-bold text-lg cursor-pointer selection:bg-transparent'>{isOpen ? '-' : '+'}</span>
      </div>
      {
        isOpen &&
        (
          <div className='flex flex-col gap-y-4'>
            <div className='flex flex-col'>
              <span className='font-bold'>
                Fecha de aplicación: {new Date(applicationDate).toLocaleDateString()}
              </span>
              <span className='font-bold'>
                Razones para contrarme:
              </span>
              <p className='flex-1'>
                {applicantDescription}
              </p>
            </div>
            <StyledButton
              text='Aceptar Postulante'
              onClick={handleClick}
            />
          </div>
        )
      }
    </div>
  )
}

export default ApplicantItem
