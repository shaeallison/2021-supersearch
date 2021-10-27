import styled from 'styled-components'
import device from '../utils/breakpoints'

const columnBase = 12

const StyledColumn = styled.div`
  ${props => props.cols.map(item =>{
    if (item.breakpoint !== null) {
      return `@media ${device[item.breakpoint]} {
        width: ${(item.size / columnBase) * 100}%;
      }`
    } else {
      return `width: ${(item.size / columnBase) * 100}%;`
    }
  })}
`;

const Column = (props) =>  {
  return (
    <StyledColumn cols={props.cols}>
      {props.children}
    </StyledColumn>
  )
}

export default Column
