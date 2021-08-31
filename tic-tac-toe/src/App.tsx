import React from 'react'
// import Board from './components/Board'
import StartingBoard from './components/StartingBoard'
// import Board from './components/Board'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  // const game = useTicTacToe()
  return (
    <div>
      <StartingBoard />
      {/* <Board /> */}
      {/* <Router>
        <Switch>
          <Route exact path='/Board' component={Board} />
        </Switch>
      </Router> */}
    </div>
  )
}

export default App
