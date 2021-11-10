import {useContext, useEffect} from 'react'
import {Container, List, Filters, Dialog} from '../../shared'
import {DialogProvider, ListContext} from '../../utils'

const Results = (props) => {
  const heroes = props.heroes
  const {list, setList} = useContext(ListContext)

  useEffect(() => {
    setList(heroes)
  })

  return (
    <Container>
      <Filters heroes={heroes}/>
      <DialogProvider>
          <List heroes={list}/>
        <Dialog />
      </DialogProvider>
    </Container>
  )
}

export default Results
