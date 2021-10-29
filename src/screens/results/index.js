import Container from '../../shared/Container'
import List from '../../shared/List'

const Results = (props) => {
  return (
    <Container>
      <List heroes={props.heroes}/>
    </Container>
  )
}

export default Results
