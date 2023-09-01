import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  padding: 0 10rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 2rem;
  }
`

export const Title = styled.p`
  font-family: 'Baloo 2', cursive;
  font-size: 18px;
  color: ${(props) => props.theme['base-subtitle']};
  margin: 0.5rem 0 0.188rem;
`

export const FormsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 28rem;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`
