import React from 'react'
import { Route, Switch } from 'react-router-dom'
import StartPlayersScreen from './features/game/StartPlayersScreen'
import StartScreen from './features/game/StartScreen'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={StartScreen} />
          <Route
            exact
            path='/features/game/StartPlayerScreen'
            component={StartPlayersScreen}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
