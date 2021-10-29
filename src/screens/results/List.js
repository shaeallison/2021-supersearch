import Grid from '../../shared/Grid'
import Column from '../../shared/Column'
import HeroCard from './HeroCard'

const ResultsList = (props) => {
  const results = props.results
  const gutters = [
    {breakpoint: null, size: '0'},
    {breakpoint: 'sm', size: '1.5rem'},
    {breakpoint: 'md', size: '3.8rem'}
  ]

  return (
    <Grid gutter={gutters}>
      {results.map((hero, i) => (
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
  )
}

export default ResultsList
