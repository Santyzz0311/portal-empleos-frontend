import React, { useState } from 'react'

interface JobFormProps {
  onSave: (job: { title: string; description: string; location: string }) => void;
}

interface JobForm {
  title: string;
  description: string;
  location: string;
}

const AddJobForm: React.FC<JobFormProps> = ({ onSave }) => {
  const [formData, setFormData] = useState<JobForm>({
    title: '',
    description: '',
    location: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({ title: formData.title, description: formData.description, location: formData.location })
    setFormData({
      title: '',
      description: '',
      location: ''
    })
  }

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={e => setFormData(prevState => ({ ...prevState, title: e.target.value }))}
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          placeholder="Description"
          value={formData.description}
          onChange={e => setFormData(prevState => ({ ...prevState, description: e.target.value }))}
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
          Location
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="location"
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={e => setFormData(prevState => ({ ...prevState, location: e.target.value }))}
        />
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Agregar Trabajo
        </button>
      </div>
    </form>
  )
}

export default AddJobForm
