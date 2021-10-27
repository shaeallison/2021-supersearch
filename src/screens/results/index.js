import Container from '../../shared/Container'
import ResultsList from './List'

const Results = (props) => {
  return (
    <Container>
      <ResultsList heroes={props.heroes}/>
    </Container>
  )
}

export default Results
