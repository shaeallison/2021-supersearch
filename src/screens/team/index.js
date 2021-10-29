import Container from '../../shared/Container'
import List from '../../shared/List'

const Team = (props) =>  {
  return (
    <Container>
      <List screen='team' heroes={props.heroes}/>
    </Container>
  )
}

export default Team
