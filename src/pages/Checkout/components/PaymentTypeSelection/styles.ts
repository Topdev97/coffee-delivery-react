import { styled } from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
  width: 40rem;
  padding: 2.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};
`
export const PaymentTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const PaymentTitle = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
  }
`
export const PaymentFormContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const BaseButton = styled.button`
  display: flex;
  padding: 1rem;
  align-items: center;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};

  background-color: ${(props) => props.theme['base-button']};

  gap: 0.75rem;
  width: 100%;

  font-size: 12px;
  color: ${(props) => props.theme['base-text']};

  transition: 100ms;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme['base-subtitle']};
    background-color: ${(props) => props.theme['base-hover']};
  }

  &:active {
    opacity: 80%;
  }

  &:focus {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`

export const CreditCardButton = styled(BaseButton)``
export const DebitCardButton = styled(BaseButton)``
export const CashCardButton = styled(BaseButton)``
