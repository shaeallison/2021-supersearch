import {React, useState, useRef, useEffect, useCallback} from 'react'
import {Grid, Column, HeroCard} from '../shared'

const LOADER_INCREMENT = 4

const List = (props) => {
  const [numToDisplay, setNumToDisplay] = useState(LOADER_INCREMENT)
  const loader = useRef(null)
  let {heroes, screen} = props
  let removeCard = () => {}

  if (screen === 'team') {
    let savedTeam = window.localStorage.getItem('team') === null ? [] : JSON.parse(window.localStorage.getItem('team'))
    heroes = heroes.filter((hero) => savedTeam.includes(`${hero.id}`))

    removeCard = id => {
      console.log(id, 'remove')
      console.log(heroes, savedTeam, 'before')
      heroes.filter((id) => !savedTeam.includes(`${id}`))
      console.log(heroes, savedTeam, 'after')
    }
  }

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
  }, [handleObserver, heroes])

  const gutters = [
    {breakpoint: null, size: '0'},
    {breakpoint: 'sm', size: '1.5rem'},
    {breakpoint: 'md', size: '3.8rem'}
  ]

  return (
    <>
      <Grid gutter={gutters}>
        {heroes.slice(0, numToDisplay).map((hero, i) => (
          <Column
            gutter={gutters}
            cols={[
              {breakpoint: null, size: '12'},
              {breakpoint: 'sm', size: '6'},
              {breakpoint: 'md', size: '4'},
              {breakpoint: 'lg', size: '3'}
            ]}
            key={`column-${i}`}>
              <HeroCard
                hero={hero}
                screen={screen}
                removeCard={screen === 'team' ? removeCard : null}
                data-name={hero.name}
                key={`hero-${hero.id}`}
              />

          </Column>
        ))}
      </Grid>
      <div ref={loader}/>
    </>
  )
}

export default List
