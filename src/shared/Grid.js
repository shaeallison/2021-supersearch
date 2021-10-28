import styled from 'styled-components'

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${props => (props.gutter / 10)}rem;
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
