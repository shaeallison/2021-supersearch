const Detail = (props) =>  {
  const heroName = props.location.pathname.replace('/', '')
  const hero = props.heroes.find(hero => hero.name === heroName)
  return (
    <p>{hero.name}</p>
  )
}

export default Detail
