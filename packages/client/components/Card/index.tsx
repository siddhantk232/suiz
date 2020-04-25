import styled from 'styled-components'

export default function Card() {
  return (
    <StyledCard>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
        quibusdam in expedita labore.
      </p>

      <img src="https://via.placeholder.com/200" alt="login with Google" />
    </StyledCard>
  )
}

const StyledCard = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: '13vh';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100%;
  }
`
