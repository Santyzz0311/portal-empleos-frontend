import { useState } from 'react'
import useCreatedJobs from '../../hooks/useCreatedJobs'
import OptionsBar from '../OptionsBar'
import OwnJobCard from '../OwnJobCard'
import AddJobModal from '../AddJobModal'

const OwnJobs = () => {
  const { jobs } = useCreatedJobs()
  const [modal, setModal] = useState<boolean>(false)

  return (
    <>
      <OptionsBar>
        <div className="flex items-center gap-x-4">
          <span>
            Agregar trabajo
          </span>
          <div
            className="flex items-center justify-center p-4 rounded-full border-2 border-blue-500 w-10 h-10 cursor-pointer selection:bg-transparent"
            onClick={() => setModal(true)}
          >
            <span>
              +
            </span>
          </div>
        </div>
      </OptionsBar>
      <div className="grid grid-cols-4 gap-4 p-4">
        {jobs?.map((job) => (
          <OwnJobCard
            key={job.id}
            id={job.id}
            title={job.title}
            description={job.description}
            location={job.location}
          />
        ))}
      </div>
      {
        modal && <AddJobModal closeModal={() => setModal(false)} />
      }
    </>
  )
}

export default OwnJobs
