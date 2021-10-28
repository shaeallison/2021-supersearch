import Container from '../../shared/Container'
import ResultsList from './List'

const Results = (props) => {
  return (
    <Container>
      <ResultsList results={props.results}/>
      <div style={{ paddingTop: '100vh', paddingBottom: '100vh', color: 'red' }} ref={props.loader}>Loader Ref</div>
    </Container>
  )
}

export default Results
