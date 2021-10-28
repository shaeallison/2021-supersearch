import {React, useState, useRef, useEffect, useCallback } from 'react'
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
  const [results, setResults] = useState([])
  const loader = useRef(null);

  const fetchData = async (url) =>  {
    const response = await fetch(url)
    const json = await response.json()
    if (!response.ok) {
      setLoader(true)
      setError(response.status + ': ' + response.statusText)
    }
    setHeroes(json)
    setLoader(true)
  }

  const handleObserver = useCallback((entries) => {
    const target = entries[0]

    console.log(results.length, 'results length: handleObserver')

    if (target.isIntersecting) {
      console.log('handleObserver', target.isIntersecting)
      console.log(results.length, 'length')
      setResults((results) => [...results, ...heroes.slice(results.length, results.length + 1)])
    }
  }, [])

  useEffect(() => {
    fetchData('/all.json')
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option)
    console.log('observer loader.current', loader.current)
    if (loader.current) {
      observer.observe(loader.current)
    }
  },[handleObserver])

  console.log(results.length, 'results length: App')

  if (error) {
    return <div>Error: {error}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className='App'>
        <button onClick={() => setResults([...results, ...heroes.slice(results.length, results.length + 1)])}>add more results</button>
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
                  <Results loader={loader} results={results}/>
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
        <div style={{ color: 'red' }} ref={loader}>Loader Ref El</div>
      </div>
    )
  }
}

export default App
