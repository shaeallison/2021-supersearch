import {useContext, useEffect} from 'react'
import {Container, List, Dialog} from '../../shared'
import {DialogProvider, ListContext} from '../../utils'

const Team = (props) =>  {
  const heroes = props.heroes
  const {list, setList} = useContext(ListContext)
  const team = window.localStorage.getItem('team')

  useEffect(() => {
    const savedTeam = team ? JSON.parse(team) : []
    const narrowedList = heroes.filter((hero) => savedTeam.includes(`${hero.id}`))

    setList(narrowedList)
  }, [heroes, setList, team])

  if (team && team.length > 0) {
    return (
      <Container>
        <DialogProvider>
          <List heroes={list}/>
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
