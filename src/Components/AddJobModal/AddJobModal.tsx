import { FC, FormEvent, useContext, useState } from 'react'
import StyledButton from '../StyledButton'
import useCategories from '../../hooks/useCategories'
import { ErrorItemProps, JobPostData, JobPostErrors } from '../../types'
import { AuthContext } from '../../context/authContext'
import { postJob } from '../../services/jobs'

interface AddJobModalProps {
  closeModal: () => void
}

const ErrorItem: FC<ErrorItemProps> = ({ titleText }) => {
  return (
    <span title={titleText} className='h-full w-10 flex justify-center items-center rounded-full bg-black border text-white border-red-700'>
      X
    </span>
  )
}

const AddJobModal: FC<AddJobModalProps> = ({ closeModal }) => {
  const { user } = useContext(AuthContext)
  const { categories } = useCategories()
  const [formData, setFormData] = useState<JobPostData>({
    title: '',
    description: '',
    location: '',
    userId: 0,
    categoryId: 0
  })
  const [formErrors, setFormErrors] = useState<JobPostErrors>({})

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formData.title || !formData.description || !formData.location || formData.categoryId === 0) {
      setFormErrors({
        title: true,
        description: true,
        location: true,
        userId: true,
        categoryId: true
      })
      return
    } else {
      setFormErrors({})
    }

    const data: JobPostData = {
      ...formData,
      userId: user.id
    }

    postJob({ body: data })
      .then(res => {
        console.log(res)
        closeModal()
      })
      .catch(e => console.error(e))
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className='flex justify-between'>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Crear empleo</h3>
          <span className='inline-block font-bold cursor-pointer selection:bg-transparent' onClick={closeModal}>X</span>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="flex text-sm font-medium text-gray-700">
              Nombre
              {formErrors.title && <ErrorItem titleText='Debe completar este campo' />}
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prevState => ({ ...prevState, title: e.target.value }))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="description" className="text-sm font-medium text-gray-700 flex gap-x-4">
              Descrición
              {formErrors.description && <ErrorItem titleText='Debe completar este campo' />}
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prevState => ({ ...prevState, description: e.target.value }))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="location" className="flex text-sm font-medium text-gray-700">
              Ubicación
              {formErrors.location && <ErrorItem titleText='Debe completar este campo' />}
            </label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) => setFormData(prevState => ({ ...prevState, location: e.target.value }))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="categoryId" className="flex text-sm font-medium text-gray-700">
              Categoría
              {formErrors.categoryId && <ErrorItem titleText='Debe completar este campo' />}
            </label>
            <select
              name="categoryId"
              id="categoryId"
              value={formData.categoryId}
              onChange={(e) => setFormData(prevState => ({ ...prevState, categoryId: parseInt(e.target.value) }))}
            >
              <option value="0">Seleccione</option>
              {
                categories?.map(category => (
                  <option
                    key={category.id}
                    value={category.id}
                  >
                    {category.name}
                  </option>
                ))
              }
            </select>
          </div>
          <div className='text-center'>
            <StyledButton
              text='Enviar'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddJobModal
