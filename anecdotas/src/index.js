import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [anecdotas, setAnecdotas] = useState(props.anecdotes)

  const handleNext = () => {
    while(true){
      let indice = Math.floor(Math.random() * (anecdotas.length - 0) + 0)
      if(indice !== selected){
        setSelected(indice)
        break
      }
    }
  }

  const handleVote = () => {
    let anecdotas_copy = [...anecdotas]
    anecdotas_copy[selected].votos += 1
    setAnecdotas(anecdotas_copy)
  }
  
  let mayor = anecdotas[0].votos
  let indice = 0
  for (let i = 0; i < anecdotas.length; i++) {
    if(anecdotas[i].votos >= mayor){
      indice = i
      mayor = anecdotas[i].votos
    }
  }

  return (
    <div>
      <div>
        <h3>Anecdote of the day</h3>
        <p>{anecdotas[selected].anecdota}</p>
        <p>has {anecdotas[selected].votos} votes.</p>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleVote}>Vote</button>
      </div>
      <div>
        <h3>Anecdote whit most votes</h3>
        <p>{anecdotas[indice].anecdota}</p>
        <p>has {anecdotas[indice].votos} votes.</p>
      </div>
    </div>
  )
}

const anecdotes = [
  {
    anecdota: 'If it hurts, do it more often',
    votos: 0
  },
  {
    anecdota: 'Adding manpower to a late software project makes it later!',
    votos: 0
  },
  {
    anecdota: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votos: 0
  },
  {
    anecdota: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votos: 0
  },
  {
    anecdota: 'Premature optimization is the root of all evil.',
    votos: 0
  },
  {
    anecdota: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votos: 0
  }
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)