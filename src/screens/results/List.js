import Grid from '../../shared/Grid'
import Column from '../../shared/Column'
import HeroCard from './HeroCard'

const ResultsList = (props) => {
  const results = props.results
  return (
    <Grid gutter="3.8">
      {results.map((hero, i) => (
        <Column
          gutter="3.8"
          cols={[
            {breakpoint: null, size: '12'},
            {breakpoint: 'sm', size: '6'},
            {breakpoint: 'md', size: '4'},
            {breakpoint: 'lg', size: '3'}
          ]}
          key={`column-${i}`}
          >
          <HeroCard hero={hero} key={`hero-${hero.id}`} />
        </Column>
      ))}
    </Grid>
  )
}

export default ResultsList
