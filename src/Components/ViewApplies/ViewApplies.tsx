import React, { useState, useEffect, useContext } from 'react'
import JobCard from '../JobCard'
import { Category, Job } from '../../types'
import { AuthContext } from '../../context/authContext'

const ViewApplies: React.FC = () => {
  const { user } = useContext(AuthContext)!
  const [categories, setCategories] = useState<Category[]>([])
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    fetchCategories()
    fetchJobs()
  }, [])

  const fetchCategories = async () => {
    const response = await fetch('https://localhost:7267/categories')
    const data = await response.json()
    setCategories(data)
  }

  const fetchJobs = async () => {
    const response = await fetch(`https://localhost:7267/jobs/created/${user?.id}`)
    const data = await response.json()
    setJobs(data)
  }

  return (
    <main>
      <div className="bg-gray-800 text-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-evenly py-3">
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
      </div>
    </main>
  )
}

export default ViewApplies
