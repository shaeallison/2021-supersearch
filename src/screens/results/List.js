import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Detail from '../detail'

const ResultsList = (props) => {
  const heros = props.heros
  return (
    <>
      <Router>
        <Link to={'/' + heros[0].name}>{heros[0].name}</Link>
        <Switch>
          <Route path={'/' + heros[0].name}>
            <Detail hero={heros[0]} />
          </Route>
        </Switch>
      </Router>

      <ul>
        {heros.map(hero => (
          <li key={hero.id}>
            {hero.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ResultsList
