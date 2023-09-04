import { styled } from 'styled-components'

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  padding: 2rem 10rem 10rem;

  p {
    font-family: 'Baloo 2', cursive;
    font-size: 32px;
    margin-bottom: 3.375rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    width: auto;
    padding: 0;
    align-items: center;
  }
`

export const CoffeeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  flex-direction: column;

  position: relative;

  width: 16rem;
  height: 19.375rem;

  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme['base-card']};

  margin-right: 2rem;
  margin-bottom: 2.5rem;

  img {
    position: absolute;

    width: 120px;
    height: 120px;

    top: -20px;
    left: 0;
    right: 0;

    margin: auto;
  }

  @media (max-width: 768px) {
    margin-right: 0rem;

    img {
      width: 100px;
      height: 100px;
    }
  }
`

export const CoffeesContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  margin-top: 7rem;
  gap: 0.25rem;
`

export const Tag = styled.span`
  display: flex;
  position: relative;

  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};

  border-radius: 100px;

  padding: 0.25rem 0.5rem;

  font-size: 10px;
  font-weight: bold;
`
export const Title = styled.span`
  display: flex;
  margin: 1rem 1rem 0 1.25rem;

  font-size: 20px;
  font-family: 'Baloo 2', cursive;
`

export const Description = styled.span`
  display: flex;
  margin: 0.25rem 1.25rem 0 1.25rem;
  text-align: center;
  color: ${(props) => props.theme['base-label']};
  font-size: 14px;
`

export const Buy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0 1.25rem 0 1.25rem;

  position: absolute;
  bottom: 0;
  margin-bottom: 1.25rem;
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;

  padding: 0.5rem;
  margin-left: 0.5rem;

  border: none;

  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-dark']};

  transition: 100ms;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.purple};
  }
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme['base-text']};
`

export const PriceNumber = styled.span`
  font-family: 'Baloo 2', cursive;
  font-size: 24px;

  margin-left: 0.25rem;
`

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 0.6rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};

  span {
    margin: 0 0.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const CounterBaseButton = styled.button`
  width: 0.875rem;
  height: 0.875rem;
  margin-bottom: 2px;

  color: ${(props) => props.theme.purple};
  background-color: transparent;

  border: none;
  cursor: pointer;
  transition: 100ms;

  &:active {
    color: ${(props) => props.theme['purple-dark']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
  }
`

export const MinusButton = styled(CounterBaseButton)``
export const PlusButton = styled(CounterBaseButton)``
