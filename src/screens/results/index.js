import {Container, List, Filters, Dialog} from '../../shared'
import {DialogProvider} from '../../utils'

const Results = (props) => {
  const {heroes} = props
  return (
    <Container>
      <Filters heroes={heroes}/>
      <DialogProvider>
        <List screen='results' heroes={heroes}/>
        <Dialog />
      </DialogProvider>
    </Container>
  )
}

export default Results
