import Container from '../../components/container'

const Detail = (props) =>  {
  const heroName = props.location.pathname.replace('/', '')
  const hero = props.heroes.find(hero => hero.name === heroName)

  return (
    <Container>
      <p>{hero.name}</p>
    </Container>
  )
}

export default Detail
