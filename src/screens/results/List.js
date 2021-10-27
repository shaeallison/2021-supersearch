import Grid from '../../shared/Grid'
import Column from '../../shared/Column'
import HeroCard from './HeroCard'

const ResultsList = (props) => {
  const heroes = props.heroes
  return (
    <Grid>
      {heroes.map((hero, i) => (
        <Column
          cols={[
            {breakpoint: null, size: '12'},
            {breakpoint: 'sm', size: '6'},
            {breakpoint: 'md', size: '4'},
            {breakpoint: 'lg', size: '3'}
          ]}
          key={hero.id}>
          <HeroCard hero={hero} />
        </Column>
      ))}
    </Grid>
  )
}

export default ResultsList
