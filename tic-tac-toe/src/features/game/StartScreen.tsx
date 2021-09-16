import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const StartScreen: React.FC = () => {
  const [onePlayer, setOnePLayer] = useState('')
  const [name, setName] = useState('')
  const [anotherPlayer, setAnotherPlayer] = useState('')
  const [anotherName, setAnotherName] = useState('')

  const handleInput = (event: {
    preventDefault: () => void
    target: { value: React.SetStateAction<string> }
  }) => {
    setOnePLayer(event.target.value)
  }

  const handleInputs = (event: {
    preventDefault: () => void
    target: { value: React.SetStateAction<string> }
  }) => {
    setAnotherPlayer(event.target.value)
  }

  const names = (event: any) => {
    event.preventDefault()
    setName(onePlayer)
    setOnePLayer('')
    setAnotherName(anotherPlayer)
    setAnotherPlayer('')
  }

  return (
    <div className='wrapper'>
      <h2 className='header'>Tic tac toe</h2>
      <div className='namesWrapper'>
        <p>{name}</p>
        <p>{anotherName}</p>
        <p>{names}</p>
      </div>
      <form className='formContainer'>
        <div className='inputNames'>
          <input
            placeholder='leave empty to use AI or enter player name'
            type='text'
            value={onePlayer}
            name='firstPlayerName'
            onChange={handleInput}
          />
          <input
            placeholder='leave empty to use AI or enter player name'
            type='text'
            value={anotherPlayer}
            name='secondPlayersName'
            onChange={handleInputs}
          />
        </div>
      </form>
      <div>
        <p>turn Time limit in seconds: 3s</p>
        <div>
          <Link to='/features/game/PlayerScreen'>
            <button>Start</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StartScreen
