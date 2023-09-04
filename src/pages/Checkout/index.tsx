import { useNavigate } from 'react-router-dom'
import { AddressForm } from './components/AddressForm'
import { PaymentTypeSelection } from './components/PaymentTypeSelection'
import { Summary } from './components/Summary'
import {
  CheckoutContainer,
  FormsContainer,
  SummaryContainer,
  Title,
} from './styles'
import { PaymentType } from '@/interfaces/PaymentType'

export interface Address {
  zipCode: string
  street: string
  number: string
  additionalInfo: string
  town: string
  city: string
  state: string
}
export interface SuccessState {
  paymentType?: PaymentType
  address: Address
}

export function Checkout() {
  const navigate = useNavigate()
  let paymentType: PaymentType | undefined

  function setPaymentOption(paymentSelected: PaymentType) {
    paymentType = paymentSelected
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!paymentType) {
      return
    }

    const data: SuccessState = {
      paymentType,
      address: {
        zipCode: e.target.zipCode.value,
        street: e.target.street.value,
        number: e.target.number.value,
        additionalInfo: e.target.additionalInfo.value,
        town: e.target.town.value,
        city: e.target.city.value,
        state: e.target.state.value,
      },
    }

    navigate('/success', { state: data })
  }

  return (
    <CheckoutContainer autoComplete="off" onSubmit={handleSubmit}>
      <FormsContainer>
        <Title>Finish your order</Title>
        <AddressForm />
        <PaymentTypeSelection setPaymentOption={setPaymentOption} />
      </FormsContainer>

      <SummaryContainer>
        <Title>Coffees selected</Title>
        <Summary />
      </SummaryContainer>
    </CheckoutContainer>
  )
}
