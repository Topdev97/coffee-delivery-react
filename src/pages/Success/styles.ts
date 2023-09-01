import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 5rem 10rem 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2.5rem;
`

export const Title = styled.p`
  margin-bottom: 0.25rem;
  font-family: 'Baloo 2', cursive;
  font-size: 32px;
  color: ${(props) => props.theme['yellow-dark']};
`

export const Message = styled.span`
  font-size: 20px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    width: 30.75rem;
  }

  @media (max-width: 768px) {
    width: 100%;

    img {
      width: 100%;
      margin-top: 2rem;
    }
  }
`

export const OrderInfoContainer = styled.div`
  width: 32.875rem;
  padding: 2.5rem;

  border-radius: 6px 36px;
  border: 1px solid transparent;
  background: linear-gradient(
      135deg,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    )
    border-box;

  mask:
    linear-gradient(${(props) => props.theme.background} 0 0) padding-box,
    linear-gradient(${(props) => props.theme.background} 0 0);

  -webkit-mask:
    linear-gradient(${(props) => props.theme.background} 0 0) padding-box,
    linear-gradient(${(props) => props.theme.background} 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
`
