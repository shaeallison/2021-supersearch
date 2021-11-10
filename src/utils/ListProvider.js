import { useState } from 'react'
import ListContext from './ListContext'

function ListProvider({ children, ...props }) {
  const [list, setList] = useState([])

  return (
    <ListContext.Provider value={{ list, setList }} {...props}>
      {children}
    </ListContext.Provider>
  )
}

export default ListProvider
