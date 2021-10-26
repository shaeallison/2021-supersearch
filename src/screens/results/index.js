import {React, useState, useEffect} from 'react'
import ResultsList from './List'

const Results = () => {
  const [error, setError] = useState()
  const [isLoaded, setLoader] = useState(false)
  const [heros, setHeros] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/all.json')
      const json = await response.json()

      if (!response.ok) {
        setLoader(true)
        setError(response.status + ': ' + response.statusText)
      }

      setHeros(json)
      setLoader(true)
    }
    fetchData()
  },[])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <ResultsList heros={heros} />
      </>
    )
  }
}

export default Results
