import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.scss'

import Welcome from './screens/welcome'
import Results from './screens/results'
import Team from './screens/team'

const App = () => (
  <div className="App">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Supersearch</Link>
            </li>
            <li>
              <Link to="/superheros">Superheros</Link>
            </li>
            <li>
              <Link to="/team">My Team</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/superheros">
            <Results />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
)

export default App
