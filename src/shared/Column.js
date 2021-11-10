import styled from 'styled-components'
import {device} from '../utils'

const columnBase = 12

const StyledColumn = styled.div`
  // col width
  ${props => props.cols.map(item => item.breakpoint !== null ?
    `@media ${device[item.breakpoint]} { width: ${(item.size / columnBase) * 100}%; }`
    :
    `width: ${(item.size / columnBase) * 100}%;`
  )}
  // col gutter
  ${props => props.gutter.map(item => item.breakpoint !== null ?
    `@media ${device[item.breakpoint]} { padding-left: ${item.size}; }`
    :
    `padding-left: ${item.size};`
  )}
`;

const Column = (props) =>  {
  const {gutter, cols, children} = props

  return (
    <StyledColumn cols={cols} gutter={gutter}>
      {children}
    </StyledColumn>
  )
}

export default Column
