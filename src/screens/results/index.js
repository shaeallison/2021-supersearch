import Container from '../../shared/Container'
import List from '../../shared/List'
import Filters from '../../shared/Filters'
import Dialog from '../../shared/Dialog'
import DialogProvider from '../../utils/DialogProvider'

const Results = (props) => {
  return (
    <Container>
      <Filters/>
      <DialogProvider>
        <List screen='results' heroes={props.heroes}/>
        <Dialog />
      </DialogProvider>
    </Container>
  )
}

export default Results
