import {React, useState, useEffect} from 'react'

const Results = () => {
  const [error, setError] = useState()
  const [isLoaded, setLoader] = useState(false)
  const [heros, setHeros] = useState([])

  useEffect(() => {
    fetch('/all.json')
      .then(res => res.json())
      .then(
        (result) => {
          setLoader(true)
          setHeros(result)
        },
        (error) => {
          setLoader(true)
          setError(error)
        }
      )
  })

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <ul>
        {heros.map(hero => (
          <li key={hero.id}>
            {hero.name}
          </li>
        ))}
      </ul>
    )
  }
}

export default Results
