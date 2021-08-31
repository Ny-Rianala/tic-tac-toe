import React, { useState } from 'react'

const StartingScreen: React.FC = () => {
  const [onePlayer, setOnePLayer] = useState('')
  const [name, setName] = useState('')
  const [anotherPlayer, setAnotherPlayer] = useState('')
  const [anotherName, setAnotherName] = useState('')

  const handleInput = (event: any) => {
    setOnePLayer(event.target.value)
  }

  const handleInputs = (event: any) => {
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
      </div>

      <form className='formContainer'>
        <div className='inputNames'>
          <input
            placeholder='leave empty to use AI or enter player name'
            type='text'
            value={onePlayer}
            name='name-1'
            onChange={handleInput}
          />
          <input
            placeholder='leave empty to use AI or enter player name'
            type='text'
            value={anotherPlayer}
            name='name-2'
            onChange={handleInputs}
          />
        </div>
      </form>
      <div>
        <p>turn Time limit in seconds: 3s</p>
        <div>
          <button onClick={names}>Start</button>
        </div>
      </div>
    </div>
  )
}

export default StartingScreen
