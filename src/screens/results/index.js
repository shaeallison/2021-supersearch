import {React, useState, useEffect} from 'react'
import ResultsList from './List'

const Results = () => {
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
      <>
        <ResultsList heroes={heroes} />
      </>
    )
  }
}

export default Results
