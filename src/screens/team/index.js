import {Container, List, Dialog} from '../../shared'
import {DialogProvider} from '../../utils'

const Team = (props) =>  {
  const {heroes} = props
  if (window.localStorage.getItem('team') !== null && window.localStorage.getItem('team') !== '[]') {
    return (
      <Container>
        <DialogProvider>
          <List screen='team' heroes={heroes}/>
          <Dialog />
        </DialogProvider>
      </Container>
    )
  } else {
    return (
      <Container>
        <p>You do not have any team members selected. Please make selections on <a href="/results">superheros page</a>.</p>
      </Container>
    )
  }
}

export default Team
