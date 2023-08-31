import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  CashCardButton,
  CreditCardButton,
  DebitCardButton,
  PaymentContainer,
  PaymentFormContainer,
  PaymentTitle,
  PaymentTitleContainer,
} from './styles'
import { defaultTheme } from '@/styles/themes/default'

export function PaymentTypeSelection() {
  return (
    <PaymentContainer>
      <PaymentTitleContainer>
        <CurrencyDollar size={22} color={defaultTheme.purple} />
        <PaymentTitle>
          <p>Payment</p>
          <span>
            The payment is made upon delivery. Choose a payment option:{' '}
          </span>
        </PaymentTitle>
      </PaymentTitleContainer>
      <PaymentFormContainer>
        <CreditCardButton>
          <CreditCard size={16} color={defaultTheme.purple} />
          CREDIT CARD
        </CreditCardButton>
        <DebitCardButton>
          <Bank size={16} color={defaultTheme.purple} />
          DEBIT CARD
        </DebitCardButton>
        <CashCardButton>
          <Money size={16} color={defaultTheme.purple} />
          CASH
        </CashCardButton>
      </PaymentFormContainer>
    </PaymentContainer>
  )
}
