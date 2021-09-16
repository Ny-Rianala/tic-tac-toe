import React from 'react'

const StartPlayersScreen: React.FC = () => {
  return (
    <div className='wrapper'>
      <h2 className='header'>Tic tac toe</h2>
      <div>
        <p>Turn Time limit in seconds: 3s</p>
        <div>
          <button>Start</button>
        </div>
      </div>
    </div>
  )
}

export default StartPlayersScreen
