import styled from 'styled-components'

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
  width: 28rem;
  padding: 2.5rem;
  border-radius: 6px 44px;

  background-color: ${(props) => props.theme['base-card']};

  @media (max-width: 768px) {
    width: 100%;
    /* margin-right: 12.5rem; */
  }
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;

  gap: 0.25rem;
  height: 2rem;
  padding: 0 0.5rem;

  border: none;
  border-radius: 6px;

  font-size: 12px;

  color: ${(props) => props.theme.purple};
  background-color: ${(props) => props.theme['base-button']};

  transition: 100ms;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;

  max-width: 4.5rem;

  height: 2rem;
  padding: 0.6rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};

  span {
    margin: 0 0.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const Divider = styled.hr`
  border-top: 1px solid ${(props) => props.theme['base-button']};
  margin: 1.5rem 0;
`

export const SummaryTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme['base-text']};
`

export const TotalTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;
  padding: 12px 8px;

  border: none;
  border-radius: 6px;

  font-size: 14px;
  font-weight: bold;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};

  transition: 100ms;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  @media (max-width: 768px) {
    font-size: 12px;
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
