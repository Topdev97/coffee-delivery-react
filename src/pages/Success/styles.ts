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

  @media (max-width: 768px) {
    font-size: 28px;
  }
`

export const Message = styled.span`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  position: relative;

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

export const GradientBorder = styled.div`
  display: flex;
  width: 32.875rem;
  min-height: 15rem;

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

export const OrderInfoContainer = styled.div`
  display: flex;
  position: relative;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 32.875rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;

  top: 0;
  bottom: 0;
  padding: 2.5rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const InfoMessage = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme['base-text']};

  line-height: 130%;

  span {
    font-weight: bold;
  }
`

export const IconContainerBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
`

export const MapPinContainer = styled(IconContainerBase)`
  background-color: ${(props) => props.theme.purple};
`

export const TimerContainer = styled(IconContainerBase)`
  background-color: ${(props) => props.theme.yellow};
`

export const DollarSignContainer = styled(IconContainerBase)`
  background-color: ${(props) => props.theme['yellow-dark']};
`
