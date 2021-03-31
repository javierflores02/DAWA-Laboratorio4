import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './components/Statistics'
import Button from './components/Button'
import './styles.css'

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
    <div className="contenedor">
      <h3>Give feedback</h3>
      <div className="botones">
        <Button handle={handleGood} nombre={"Good"}/>
        <Button handle={handleNeutral} nombre={"Neutral"}/>
        <Button handle={handleBad} nombre={"Bad"}/>
      </div>
      <Statistics datos={[good,neutral,bad]}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
