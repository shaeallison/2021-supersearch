import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import device from '../utils/breakpoints'
import DialogContext from '../utils/DialogContext'

const StyledCard = styled.div`
  position: relative;
  min-height: 25rem;
  display: flex;
  flex-direction: column;
  height: calc(100% - 2.2rem);
  width: 100%;
  margin-bottom: 2.2rem;
  border: ${props => props.isSelected ? `0.4rem solid #F9873D` : `none`};
  border-radius: ${props => props.isSelected ? `0.2rem` : `0`};

  @media ${device.md} {
    min-height: 40rem;
    margin-bottom: 3.8rem;
    height: calc(100% - 3.8rem);
  }
`;

const StyledContent = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  background: ${props => props.isExpanded ? `#0084FF` : `transparent`};
  color: white;
  z-index: 5;

  &::after {
    display: ${props => props.isExpanded ? `none` : `block`};
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: calc(100% - 8.7rem);
    background: linear-gradient(180.02deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.53) 36.63%, #000000 100%);

    @media ${device.md} {
      height: calc(100% - 23.8rem);
    }
  }
`;

const StyledImg = styled.span`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const StyledPowers = styled.div`
  display: ${props => props.isExpanded ? `block` : `none`};
`;

const StyledButton = styled.button`
  position: relative;
  z-index: 5;
`;

const StyledLink = styled(Link)`
  display: block;
`

const HeroCard = (props) => {
  const [isExpanded, toggleExpand] = useState(false)
  const [team, setTeam] = useState(JSON.parse(window.localStorage.getItem('team')))
  const {images, name, powerstats, id} = props.hero
  const {screen, removeCard} = props
  const { setDialog } = useContext(DialogContext)

  const handleExpand = () => isExpanded ? toggleExpand(false) : toggleExpand(true)

  const addToTeam = (id) => {
    let savedTeam = JSON.parse(window.localStorage.getItem('team'))

    if (savedTeam.length === 8) {
      setDialog({
        isOpen: true,
        heading: 'Oops! You have too many team members',
        text: 'You may only select 8 team members at a time.',
        closeBtnText: 'Close'
      })
    } else {
      if (savedTeam === '' || savedTeam === null) {
        window.localStorage.setItem('team', JSON.stringify([id]))
        setTeam(JSON.stringify([id]))
      } else {
        savedTeam.push(id)
        window.localStorage.setItem('team', JSON.stringify(savedTeam))
        setTeam(JSON.stringify(savedTeam))
      }
    }
  }

  const removeFromTeam = (id) => {
    let savedTeam = JSON.parse(window.localStorage.getItem('team'))

    savedTeam = savedTeam.filter(hero => hero !== `${id}`)
    window.localStorage.setItem('team', JSON.stringify(savedTeam))
    setTeam(JSON.stringify(savedTeam))
  }

  const handleChange = (e) => {
    const heroId = e.target.dataset.hero.replace('hero-', '')

    if (e.target.checked) {
      addToTeam(heroId)
    } else {
      removeFromTeam(heroId)
    }

    if (screen === 'team') {
      removeCard(heroId)
    }
  }

  return (
    <StyledCard isExpanded={isExpanded} isSelected={team.includes(`${id}`)}>
      <StyledImg imageUrl={images.md} role='img' aria-label={name}/>
      <StyledContent isExpanded={isExpanded}>
        <div>
          <StyledLink to={'/' + name}>{name}</StyledLink>
          <form>
            <label>Add to Team</label>
            <input
              type='checkbox'
              checked={team.includes(`${id}`)}
              onChange={handleChange}
              data-hero={`hero-${id}`}
            />
          </form>
          <StyledPowers isExpanded={isExpanded}>
            {Object.keys(powerstats).map((key) => (
              <p key={`${name}-${key}`}>{key}: {powerstats[key]}</p>
            ))}
          </StyledPowers>
        </div>
        <StyledButton onClick={handleExpand}>Collapse/Expand</StyledButton>
      </StyledContent>
    </StyledCard>
  )
}

export default HeroCard
