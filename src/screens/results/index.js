import Container from '../../shared/Container'
import ResultsList from './List'

const Results = (props) => {
  return (
    <Container>
      <ResultsList results={props.results}/>
    </Container>
  )
}

export default Results
