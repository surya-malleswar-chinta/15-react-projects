import React, {useEffect, useState} from 'react'
import Tours from './Tours'

const App = (props) => {

  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  const url = 'https://course-api.com/react-tours-project'

  const getTours = async () => {

    try {
      const response = await fetch(url)
      const json = await response.json()
      setTours(json)
      setLoading(false)
    } catch(error) {
      setLoading(true)
    }
  }

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(()=> {
    getTours()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (tours.length === 0) {
    return <h1>No Tours</h1>
  }

  return <Tours tours={tours} removeTour={removeTour}/>
}

export default App