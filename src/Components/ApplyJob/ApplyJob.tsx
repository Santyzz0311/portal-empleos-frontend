import { useState, useEffect, useContext, FC } from 'react'
import JobCard from '../JobCard'
import { Job } from '../../types'
import { AuthContext } from '../../context/authContext'
import OptionsBar from '../OptionsBar'
import { getAllJobsIncludingHasApplied } from '../../services/jobs'
import useCategories from '../../hooks/useCategories'

const ApplyJob: FC = () => {
  const { user } = useContext(AuthContext)!
  const { categories } = useCategories()
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    getAllJobsIncludingHasApplied({ userId: user.id })
      .then(jobs => setJobs(jobs))
      .catch(e => console.error(e))
  }, [jobs])

  return (
    <>
      <OptionsBar>
        <div className="flex justify-evenly">
          {categories.map(({ id, name }) => (
            <button key={id} className="text-sm px-3 py-2 rounded-md hover:bg-gray-700">
              {name}
            </button>
          ))}
        </div>
      </OptionsBar>
      <div className="grid grid-cols-4 gap-4 p-4">
        {jobs.map(job => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </>
  )
}

export default ApplyJob
