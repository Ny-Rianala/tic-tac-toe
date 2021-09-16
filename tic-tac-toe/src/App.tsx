import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import StartPlayersScreen from './features/game/StartPlayersScreen'
import StartScreen from './features/game/StartScreen'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={StartScreen} />
          <Route
            exact
            path='/features/game/StartPlayersScreen'
            component={StartPlayersScreen}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
