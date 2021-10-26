import styled from 'styled-components'

const Container = (props) =>  {
  const Container = styled.div`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Container
