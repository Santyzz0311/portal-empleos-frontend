import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import PostulationCard from '../PostulationCard'
import { Applies } from '../../types'
import OptionsBar from '../OptionsBar'

const Postulation: React.FC = () => {
  const { user } = useContext(AuthContext)!
  const [postulations, setPostulations] = useState<Applies[]>([])

  useEffect(() => {
    const fetchPostulations = async () => {
      try {
        const response = await fetch(`https://localhost:7267/applies/user/${user?.id}`)
        if (response.ok) {
          const data: Applies[] = await response.json()
          setPostulations(data)
        } else {
          console.error('Failed to fetch postulations')
        }
      } catch (error) {
        console.error('Error fetching postulations:', error)
      }
    }

    if (user?.id) {
      fetchPostulations()
    }
  }, [user])

  return (
    <>
      <OptionsBar>
        <div className='flex items-center gap-x-3'>
          <span className="text-xl font-bold inline-block">Mis Postulaciones:</span>
          <span className='font-bold inline-block text-lg'>{postulations.length}</span>
        </div>
      </OptionsBar>
      <div className="grid grid-cols-4 gap-4 p-4">
        {postulations.map(postulation => (
          <PostulationCard key={postulation.jobId} {...postulation} />
        ))}
      </div>
    </>
  )
}

export default Postulation
