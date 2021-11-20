import {Grid, Column, HeroCard, Dialog} from '../../shared'
import {DialogProvider, ListProvider} from '../../utils'

const Detail = (props) =>  {
  const {heroes, location} = props
  const heroName = location.pathname.replace('/', '')
  const hero = heroes.find(hero => hero.name === heroName)

  const gutters = [
    {breakpoint: null, size: '0'},
    {breakpoint: 'sm', size: '2.5rem'},
    {breakpoint: 'md', size: '5rem'}
  ]

  return (
    <>
      <Grid gutter={gutters}>
        <Column
          gutter={gutters}
          cols={[
            {breakpoint: null, size: '12'},
            {breakpoint: 'sm', size: '5'}
          ]}
          key='image'>
          <DialogProvider>
            <ListProvider>
              <HeroCard
                isExpandable={false}
                size='large'
                allHeroes={heroes} // how else can I update list context on team remove???
                hero={hero}
                data-name={hero.name}
                key={`hero-${hero.id}`}
              />
            </ListProvider>
            <Dialog />
          </DialogProvider>
        </Column>
        <Column
          gutter={gutters}
          cols={[
            {breakpoint: null, size: '12'},
            {breakpoint: 'sm', size: '7'}
          ]}
          key='details'>
          <Grid gutter={gutters}>
            <Column
              gutter={gutters}
              cols={[
                {breakpoint: null, size: '12'},
                {breakpoint: 'sm', size: '6'}
              ]}
              key='powerstats'>
              Powerstats
            </Column>
            <Column
              gutter={gutters}
              cols={[
                {breakpoint: null, size: '12'},
                {breakpoint: 'sm', size: '6'}
              ]}
              key='appearance'>
              Appearance
            </Column>
            <Column
              gutter={gutters}
              cols={[
                {breakpoint: null, size: '12'}
              ]}
              key='bio'>
              Biography
            </Column>
            <Column
              gutter={gutters}
              cols={[
                {breakpoint: null, size: '12'}
              ]}
              key='work'>
              Work
            </Column>
            <Column
              gutter={gutters}
              cols={[
                {breakpoint: null, size: '12'}
              ]}
              key='related'>
              Related Characters
            </Column>
          </Grid>
        </Column>
      </Grid>
    </>
  )
}

export default Detail
