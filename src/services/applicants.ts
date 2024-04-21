import { Applicant, ApplicationPostData } from '../types'

export const getApplicantsByJobId = async ({ jobId }: { jobId: number }): Promise<Applicant[]> => {
  try {
    const response = await fetch(`https://localhost:7267/applies/job/${jobId}`)
    if (response.ok) {
      const applicants = await response.json()
      return applicants?.map((applicant: Applicant) => ({
        applicationId: applicant.applicationId,
        userId: applicant.userId,
        userName: applicant.userName,
        userEmail: applicant.userEmail,
        applyDate: applicant.applyDate,
        description: applicant.description
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

export const postApplication = async ({ body }: { body: ApplicationPostData }) => {
  try {
    const response = await fetch('https://localhost:7267/applies', {
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
  }
}
