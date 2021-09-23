import React, { useState } from 'react'
import data from './data'
import Review from './Review'

const App = () => {

  const [index, setIndex] = useState(0)

  const prevBtn = () => {
    let newIndex = index-1;
    if (newIndex < 0) newIndex = data.length-1;
    setIndex(() => newIndex)
  }

  const nextBtn = () => {
    let newIndex = index+1;
    if (newIndex > data.length-1) newIndex = 0;
    setIndex(() => newIndex)
  }

  const random = () => {
    let newIndex = Math.floor((Math.random()*data.length))
    setIndex(() => newIndex)
  }

  return (
    <div>
      <Review review={data[index]} />
      <p>
        <button onClick={prevBtn}> Previous</button>
        <button onClick={nextBtn}> Next </button>
        <button onClick={random}> Random </button>
      </p>
    </div>
  )

}

export default App