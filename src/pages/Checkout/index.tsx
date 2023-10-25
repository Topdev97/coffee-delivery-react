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
import { FormEvent } from 'react'

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

interface FormElements extends HTMLFormControlsCollection {
  zipCode: HTMLInputElement
  street: HTMLInputElement
  number: HTMLInputElement
  additionalInfo: HTMLInputElement
  town: HTMLInputElement
  city: HTMLInputElement
  state: HTMLInputElement
}

interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

export function Checkout() {
  const navigate = useNavigate()
  let paymentType: PaymentType | undefined

  function setPaymentOption(paymentSelected: PaymentType) {
    paymentType = paymentSelected
  }

  function handleSubmit(e: FormEvent<YourFormElement>) {
    e.preventDefault()

    if (!paymentType) return

    const data: SuccessState = {
      paymentType,
      address: {
        zipCode: e.currentTarget.zipCode.value,
        street: e.currentTarget.street.value,
        number: e.currentTarget.number.value,
        additionalInfo: e.currentTarget.additionalInfo.value,
        town: e.currentTarget.town.value,
        city: e.currentTarget.city.value,
        state: e.currentTarget.state.value,
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
