import styled from 'styled-components'
import device from '../utils/breakpoints'

const columnBase = 12

const StyledColumn = styled.div`
  ${props => props.cols.map(item => item.breakpoint !== null ?
    `@media ${device[item.breakpoint]} { width: ${(item.size / columnBase) * 100}%; }`
    :
    `width: ${(item.size / columnBase) * 100}%;`
  )}
  padding-left: ${props => (props.gutter)}rem;
`;

const Column = (props) =>  {
  return (
    <StyledColumn cols={props.cols} gutter={props.gutter}>
      {props.children}
    </StyledColumn>
  )
}

export default Column
