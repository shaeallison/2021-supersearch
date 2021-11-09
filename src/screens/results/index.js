import Container from '../../shared/Container'
import List from '../../shared/List'
import Filters from '../../shared/Filters'
import Dialog from '../../shared/Dialog'
import DialogProvider from '../../utils/DialogProvider'

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
