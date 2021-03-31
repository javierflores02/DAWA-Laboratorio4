import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './components/Statistics'
import Button from './components/Button'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h3>Give feedback</h3>
      <div>
        <Button handle={handleGood} nombre={"good"}/>
        <Button handle={handleNeutral} nombre={"neutral"}/>
        <Button handle={handleBad} nombre={"bad"}/>
      </div>
      <Statistics datos={[good,neutral,bad]}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
