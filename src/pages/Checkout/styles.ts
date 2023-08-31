import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  padding: 0 10rem;
  gap: 2rem;
`

export const FormsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Title = styled.p`
  font-family: 'Baloo 2', cursive;
  font-size: 18px;
  color: ${(props) => props.theme['base-subtitle']};
  margin: 0.5rem 0 0.188rem;
`
