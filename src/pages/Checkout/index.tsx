import { AddressForm } from './components/AddressForm'
import { PaymentTypeSelection } from './components/PaymentTypeSelection'
import { Summary } from './components/Summary'
import {
  CheckoutContainer,
  FormsContainer,
  SummaryContainer,
  Title,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormsContainer>
        <Title>Finish your order</Title>
        <AddressForm />
        <PaymentTypeSelection />
      </FormsContainer>

      <SummaryContainer>
        <Title>Coffees selected</Title>
        <Summary />
      </SummaryContainer>
    </CheckoutContainer>
  )
}
