import { useEffect, useState } from "react"
import Job from "./Job"

const App = () => {

  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [index, setIndex] = useState(0)
  const url = 'https://course-api.com/react-tabs-project'

  const getJobs = async() => {
    try {
      let response = await fetch(url)
      let json = await response.json()
      setJobs(json)
      setLoading(false)
    } catch(error) {
      setLoading(true)
    }
  }

  useEffect(() => {
    getJobs()
  }, []) 

  if (loading) {
      return (
        <div>
          <h2>Loading....</h2>
        </div>
      )
  }

  return (
    <div>
      <main>
        <div className="btn-container">
          {jobs.map((job, i) => {
              return <button key={job.company} 
                      onClick={()=> setIndex(i)} 
                      className={`${i === index && 'active'}`}>{job.company}</button>
            }
          )}
        </div>
        <Job {...jobs[index]}/>
      </main>
    </div>
  )

}

export default App