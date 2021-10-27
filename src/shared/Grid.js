import styled from 'styled-components'

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Grid = (props) =>  {
  return (
    <StyledGrid>
      {props.children}
    </StyledGrid>
  )
}

export default Grid
