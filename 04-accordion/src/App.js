import React from 'react'
import data from './data'
import SingleQuestion from './Question'

const App = () => {
  return (
    <div className="container">
      <h1>Our Questions</h1>
      {data.map((question) => <SingleQuestion key={question.id} {...question}/>)}
    </div>
  )
}

export default App