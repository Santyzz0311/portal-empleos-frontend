import { FC } from 'react'
import ApplyJob from '../../Components/ApplyJob/ApplyJob'
import Postulation from '../../Components/Postulation'
import OwnJobs from '../../Components/OwnJobs'
import Navbar from '../../Components/NavBar'
import useNavBar from '../../hooks/useNavBar'

const Home: FC = () => {
  const { activeTab } = useNavBar()

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow border-t-2 border-blue-500">
        {
          activeTab === 'apply'
            ? <ApplyJob />
            : activeTab === 'postulation'
              ? <Postulation />
              : activeTab === 'ownJobs'
                ? <OwnJobs />
                : null
        }
      </main>
    </div>
  )
}

export default Home
