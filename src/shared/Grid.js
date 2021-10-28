import styled from 'styled-components'
import device from '../utils/breakpoints'

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${props => props.gutter.map(item => item.breakpoint !== null ?
    `@media ${device[item.breakpoint]} { margin-left: -${item.size}; }`
    :
    `margin-left: -${item.size};`
  )}
`;

// gutter prop should be in rems

const Grid = (props) =>  {
  return (
    <StyledGrid gutter={props.gutter}>
      {props.children}
    </StyledGrid>
  )
}

export default Grid
