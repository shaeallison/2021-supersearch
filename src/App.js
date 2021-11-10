import {React, useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.scss'

import {Welcome, Results, Team, Detail, NotFound} from './screens'
import {ListProvider} from './utils'

const App = () => {
  const [error, setError] = useState()
  const [isLoaded, setLoader] = useState(false)
  const [heroes, setHeroes] = useState([])

  const fetchData = async (url) => {
    const response = await fetch(url)
    const json = await response.json()
    if (!response.ok) {
      setLoader(true)
      setError(response.status + ": " + response.statusText)
    }
    setHeroes(json)
    setLoader(true)
  }

  useEffect(() => {
    if (heroes.length < 1) {
      fetchData('/all.json')
    }
  }, [heroes])

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
                  <ListProvider>
                    <Results heroes={heroes}/>
                  </ListProvider>
                </Route>
                <Route path='/team'>
                  <ListProvider>
                    <Team heroes={heroes}/>
                  </ListProvider>
                </Route>
                <Route exact path='/:path' render={(props) => {
                  const heroName = props.location.pathname.replace('/', '')

                  if (heroes.find(hero => hero.name === heroName)) {
                    return <Detail {...props} heroes={heroes}/>
                  } else {
                    return <NotFound />
                  }
                }} />
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    )
  }

}

export default App
