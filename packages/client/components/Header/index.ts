import styled from 'styled-components'

export const Header = styled.header`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h1`
  margin: 0;
  color: ${({ color }) => color};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  font-family: 'Luckiest Guy', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ size }) => `${size}rem`};
  letter-spacing: ${({ isBrand }) => (isBrand ? '0.17em' : null)};
`

export const Subtitle = styled.p`
  margin-top: 5px;
  text-align: center;
  font-family: Luckiest Guy;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
`
