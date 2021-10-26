import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Detail from '../detail'

class Results extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      heros: []
    }
  }

  componentDidMount() {
    fetch('/all.json')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            heros: result
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, heros } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <>
          {/* <Router>
            <Link to="/detail">Detail</Link>
            <Switch>
              <Route path="/detail">
                <Detail />
              </Route>
            </Switch>
          </Router> */}
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
  }
}

export default Results
