import {
  Link
} from 'react-router-dom'

const ResultsList = (props) => {
  const heroes = props.heroes
  return (
    <ul>
      {heroes.map((hero, i) => (
        <li key={hero.id}>
          <Link to={'/' + hero.name}>{hero.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default ResultsList
