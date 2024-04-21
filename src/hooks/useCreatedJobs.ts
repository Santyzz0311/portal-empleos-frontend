import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { CreatedJobs } from '../types'
import { getCreatedJobs } from '../services/jobs'

export default function useCreatedJobs() {
  const { user } = useContext(AuthContext)!
  const [jobs, setJobs] = useState<CreatedJobs[]>([])

  useEffect(() => {
    if (user && user.id) {
      getCreatedJobs({ userId: user.id }).then((newJobs: CreatedJobs[]) => setJobs(newJobs))
    }
  }, [jobs])

  return {
    jobs
  }
}
