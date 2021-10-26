import {React} from 'react'
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
import Detail from './screens/detail'

const App = () => {
  return (
    <div className="App">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Supersearch</Link>
            </li>
            <li>
              <Link to="/superheroes">Superheroes</Link>
            </li>
            <li>
              <Link to="/team">My Team</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/superheroes">
            <Results />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route exact path="/:path" component={Detail}/>
        </Switch>
      </div>
    </Router>
  </div>
  )
  }

export default App
