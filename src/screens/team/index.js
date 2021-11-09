import Container from '../../shared/Container'
import List from '../../shared/List'
import Dialog from '../../shared/Dialog'
import DialogProvider from '../../utils/DialogProvider'

const Team = (props) =>  {
  const {heroes} = props
  return (
    <Container>
      <DialogProvider>
        <List screen='team' heroes={heroes}/>
        <Dialog />
      </DialogProvider>
    </Container>
  )
}

export default Team
