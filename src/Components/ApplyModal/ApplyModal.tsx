import { FormEvent, useContext, useState } from 'react'
import { ApplyModalProps } from '../../types'
import { AuthContext } from '../../context/authContext'
import { postApplication } from '../../services/applicants'

const ApplyModal: React.FC<ApplyModalProps> = ({ idJob, jobTitle, jobDescription, setModal }) => {
  const { user } = useContext(AuthContext)!
  const [applicationReason, setApplicationReason] = useState<string>('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const data = {
      jobId: idJob,
      userId: user.id,
      description: applicationReason
    }

    postApplication({ body: data })
      .then(res => {
        console.log(res)
      })
      .catch(e => console.error(e))
    setModal(false)
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className='flex justify-between'>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Aplicar a {jobTitle}</h3>
          <span className='inline-block font-bold cursor-pointer selection:bg-transparent' onClick={() => setModal(false)}>X</span>
        </div>
        <p className="text-sm text-gray-500">{jobDescription}</p>
        <form onSubmit={handleSubmit}>
          <textarea
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Describe por qué eres el candidato ideal..."
            value={applicationReason}
            onChange={e => setApplicationReason(e.target.value)}
          />
          <button
            className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Enviar Aplicación
          </button>
        </form>
      </div>
    </div>
  )
}

export default ApplyModal
