import { AddressForm } from './components/AddressForm'
import { PaymentTypeSelection } from './components/PaymentTypeSelection'
import { CheckoutContainer, FormsContainer, Title } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormsContainer>
        <Title>Finish your order</Title>
        <AddressForm />
        <PaymentTypeSelection />
      </FormsContainer>
      <Title>Coffees selected</Title>
    </CheckoutContainer>
  )
}
