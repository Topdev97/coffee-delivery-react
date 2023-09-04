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
import { PaymentType } from '@/interfaces/PaymentType'

interface PaymentTypeSelectionProps {
  setPaymentOption: (paymentOption: PaymentType) => void
}

export function PaymentTypeSelection({
  setPaymentOption,
}: PaymentTypeSelectionProps) {
  function handleSetPaymentOption(value: PaymentType) {
    setPaymentOption(value)
  }

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
        <CreditCardButton
          type="button"
          onClick={() => handleSetPaymentOption(PaymentType.CREDIT_CARD)}
        >
          <CreditCard size={16} color={defaultTheme.purple} />
          CREDIT CARD
        </CreditCardButton>
        <DebitCardButton
          type="button"
          onClick={() => handleSetPaymentOption(PaymentType.DEBIT_CARD)}
        >
          <Bank size={16} color={defaultTheme.purple} />
          DEBIT CARD
        </DebitCardButton>
        <CashCardButton
          type="button"
          onClick={() => handleSetPaymentOption(PaymentType.CASH)}
        >
          <Money size={16} color={defaultTheme.purple} />
          CASH
        </CashCardButton>
      </PaymentFormContainer>
    </PaymentContainer>
  )
}
