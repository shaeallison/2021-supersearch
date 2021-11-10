import styled from 'styled-components'
import {device} from '../utils'

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
  const {gutter, children} = props
  return (
    <StyledGrid gutter={gutter}>
      {children}
    </StyledGrid>
  )
}

export default Grid
