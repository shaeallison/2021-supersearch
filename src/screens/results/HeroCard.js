import {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import device from '../../utils/breakpoints'

const StyledCard = styled.div`
  position: relative;
  min-height: 25rem;
  display: flex;
  flex-direction: column;
  height: calc(100% - 2.2rem);
  width: 100%;
  margin-bottom: 2.2rem;

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
  const {images, name, powerstats, id} = props.hero

  const handleExpand = () => isExpanded ? toggleExpand(false) : toggleExpand(true)

  const addToTeam = (id) => {
    let savedTeam = JSON.parse(window.localStorage.getItem('team'))

    if (savedTeam === '' || savedTeam === null) {
      window.localStorage.setItem('team', JSON.stringify([id]))
    } else {
      savedTeam.push(id)
      window.localStorage.setItem('team', JSON.stringify(savedTeam))
    }
  }

  const removeFromTeam = (id) => {
    let savedTeam = JSON.parse(window.localStorage.getItem('team'))
    savedTeam = savedTeam.filter(hero => hero !== `${id}`)
    window.localStorage.setItem('team', JSON.stringify(savedTeam))
  }

  const handleChange = (e) => {
    const heroId = e.target.dataset.hero.replace('hero-', '')

    if (e.target.checked) {
      addToTeam(heroId)
    } else {
      removeFromTeam(heroId)
    }
  }

  return (
    <StyledCard isExpanded={isExpanded}>
      <StyledImg imageUrl={images.md} role='img' aria-label={name}/>
      <StyledContent isExpanded={isExpanded}>
        <div>
          <StyledLink to={'/' + name}>{name}</StyledLink>
          Add to Team
          <form>
            <label>Add to Team</label>
            <input type='checkbox' onChange={handleChange} data-hero={`hero-${id}`}/>
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
