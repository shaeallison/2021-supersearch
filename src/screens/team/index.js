import Container from '../../shared/Container'
import List from '../../shared/List'
import Dialog from '../../shared/Dialog'
import DialogProvider from '../../utils/DialogProvider'

const Team = (props) =>  {
  return (
    <Container>
      <DialogProvider>
        <List screen='team' heroes={props.heroes}/>
        <Dialog />
      </DialogProvider>
    </Container>
  )
}

export default Team
