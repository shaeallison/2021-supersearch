import {React, useState, useRef, useEffect, useCallback} from 'react'
import Container from '../../shared/Container'
import ResultsList from './List'

const LOADER_INCREMENT = 4

const Results = (props) => {
  const [numToDisplay, setNumToDisplay] = useState(LOADER_INCREMENT)
  const loader = useRef(null)

  const handleObserver = useCallback((entries) => {
    const target = entries[0]
    if (target.isIntersecting) {
      setNumToDisplay((num) => num + LOADER_INCREMENT)
    }
  }, [])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if (loader.current) {
      observer.observe(loader.current)
    }
  }, [handleObserver, props.heroes])

  return (
    <Container>
      <ResultsList results={props.heroes.slice(0, numToDisplay)}/>
      <div ref={loader}/>
    </Container>
  )
}

export default Results
