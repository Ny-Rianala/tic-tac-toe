import React from 'react'
import CountDownTimer from '../../components/CountDownTimer'

const StartPlayersScreen: React.FC = () => {
  return (
    <div className='wrapper'>
      <h2 className='header'>Tic tac toe</h2>
      <div>
        <CountDownTimer />
        <div>
          <button>Start</button>
        </div>
      </div>
    </div>
  )
}

export default StartPlayersScreen
