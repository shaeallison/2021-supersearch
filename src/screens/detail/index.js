import Container from '../../shared/Container'

const Detail = (props) =>  {
  const {heroes, location} = props
  const heroName = location.pathname.replace('/', '')
  const hero = heroes.find(hero => hero.name === heroName)

  return (
    <Container>
      <p>{hero.name}</p>
    </Container>
  )
}

export default Detail
