import {React, useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.scss'

import Welcome from './screens/welcome'
import Results from './screens/results'
import Team from './screens/team'
import Detail from './screens/detail'

const App = () => {
  const [error, setError] = useState()
  const [isLoaded, setLoader] = useState(false)
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    async function fetchData(url) {
      const response = await fetch(url)
      const json = await response.json()

      if (!response.ok) {
        setLoader(true)
        setError(response.status + ': ' + response.statusText)
      }

      setHeroes(json)
      setLoader(true)
    }
    fetchData('/all.json')
  },[])

  if (error) {
    return <div>Error: {error}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className='App'>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Supersearch</Link>
                </li>
                <li>
                  <Link to='/superheroes'>Superheroes</Link>
                </li>
                <li>
                  <Link to='/team'>My Team</Link>
                </li>
              </ul>
            </nav>
            <main>
              <Switch>
                <Route exact path='/'>
                  <Welcome />
                </Route>
                <Route path='/superheroes'>
                  <Results heroes={heroes}/>
                </Route>
                <Route path='/team'>
                  <Team heroes={heroes}/>
                </Route>
                <Route exact path='/:path' render={(props) => (
                  <Detail {...props} heroes={heroes} />
                )} />
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
