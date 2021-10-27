import styled from 'styled-components'
import device from '../utils/breakpoints'

const StyledContainer = styled.div`
  padding: 0 2.7rem;

  @media ${device.md} {
    padding: 0 5rem;
  }

  @media ${device.lg} {
    padding: 0;
    max-width: 118.8rem;
    margin: 0 auto;
  }
`;

const Container = (props) =>  {
  return (
    <StyledContainer>
      {props.children}
    </StyledContainer>
  )
}

export default Container
