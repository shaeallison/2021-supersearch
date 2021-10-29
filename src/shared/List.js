import {React, useState, useRef, useEffect, useCallback} from 'react'
import Grid from './Grid'
import Column from './Column'
import HeroCard from './HeroCard'

const LOADER_INCREMENT = 4

const List = (props) => {
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

  const gutters = [
    {breakpoint: null, size: '0'},
    {breakpoint: 'sm', size: '1.5rem'},
    {breakpoint: 'md', size: '3.8rem'}
  ]

  return (
    <>
      <Grid gutter={gutters}>
        {props.heroes.slice(0, numToDisplay).map((hero, i) => (
          <Column
            gutter={gutters}
            cols={[
              {breakpoint: null, size: '12'},
              {breakpoint: 'sm', size: '6'},
              {breakpoint: 'md', size: '4'},
              {breakpoint: 'lg', size: '3'}
            ]}
            key={`column-${i}`}
            >
            <HeroCard hero={hero} data-name={hero.name} key={`hero-${hero.id}`} />
          </Column>
        ))}
      </Grid>
      <div ref={loader}/>
    </>
  )
}

export default List
