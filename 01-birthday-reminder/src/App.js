import React, {useState} from 'react'
import data from './data'
import List from './List'

const App = () => {
  const [persons, setPersons] = useState(data)

  return(
    <div>
      <h1>{persons.length} birthdays today</h1>
      {persons.map((person) => {
        return <List image={person.image} name={person.name} age={person.age}/>
      })}
      <button onClick={() => setPersons([])}>Clear All</button>
    </div>
  )

}

export default App
