import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

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
  <div className="contenedor">
    <div className="anecdota">
      <h2>Anecdote of the day</h2><hr />
      <p>{anecdotas[selected].anecdota}</p>
      <div className="anecdota-footer">
        <div className="acciones">
          <p className="accion-part">Has {anecdotas[selected].votos} votes.</p>
          <div className="accion-part botones">
            <button onClick={handleNext}>Next</button>
            <button onClick={handleVote}>Vote</button>
          </div>
        </div>
      </div>
    </div>
    <div className="anecdota">
      <h2>Anecdote whit most votes</h2><hr />
      <p>{anecdotas[indice].anecdota}</p>
      <div className="anecdota-footer">
        <div className="acciones">
          <p className="accion-part">Has {anecdotas[indice].votos} votes.</p>
        </div>
      </div>
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