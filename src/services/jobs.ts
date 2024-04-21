import { CreatedJobs, Job, JobPostData } from '../types'

export const getCreatedJobs = async ({ userId }: { userId: number }): Promise<CreatedJobs[]> => {
  try {
    const response = await fetch(`https://localhost:7267/jobs/created/${userId}`)
    if (response.ok) {
      const jobs = await response.json()
      return jobs?.map((job: CreatedJobs) => ({
        id: job.id,
        title: job.title,
        description: job.description,
        location: job.location,
        creatorUserName: job.creatorUserName,
        creatorEmail: job.creatorEmail,
        categoryName: job.categoryName
      }))
    } else {
      console.error('Error obteniendo los datos')
      return []
    }
  } catch (error) {
    console.error('Error al hacer fetching de los datos', error)
    return []
  }
}

export const getAllJobsIncludingHasApplied = async ({ userId }: { userId: number }): Promise<Job[]> => {
  try {
    const response = await fetch(`https://localhost:7267/jobs?userId=${userId}`)
    if (response.ok) {
      const jobs = await response.json()
      return jobs?.map((job: Job) => ({
        id: job.id,
        title: job.title,
        description: job.description,
        location: job.location,
        creatorUserName: job.creatorUserName,
        creatorEmail: job.creatorEmail,
        categoryName: job.categoryName,
        hasApplied: job.hasApplied
      }))
    } else {
      console.error('Error obteniendo los datos')
      return []
    }
  } catch (error) {
    console.error('Error al hacer fetching de los datos', error)
    return []
  }
}

export const postJob = async ({ body }: { body: JobPostData }) => {
  try {
    const response = await fetch('https://localhost:7267/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error posting job:', error)
    throw error
  }
}
