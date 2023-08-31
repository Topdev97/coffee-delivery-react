import { MapPinLine } from 'phosphor-react'
import {
  AdditionalAddressDetailInput,
  AddressContainer,
  AddressFormContainer,
  AddressTitle,
  AddressTitleContainer,
  CheckoutContainer,
  CityInput,
  NumberInput,
  StateInput,
  StreetInput,
  TownInput,
  ZipCodeInput,
} from './styles'
import { defaultTheme } from '@/styles/themes/default'

export function Chechout() {
  return (
    <CheckoutContainer>
      <AddressContainer>
        <AddressTitleContainer>
          <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
          <AddressTitle>
            <p>Endereço de entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </AddressTitle>
        </AddressTitleContainer>
        <AddressFormContainer>
          <ZipCodeInput placeholder="Zip Code" />
          <StreetInput placeholder="Street" />
          <div>
            <NumberInput placeholder="Number" />
            <AdditionalAddressDetailInput placeholder="Additional address information" />
          </div>
          <div>
            <TownInput placeholder="Town" />
            <CityInput placeholder="City" />
            <StateInput placeholder="State" />
          </div>
        </AddressFormContainer>
      </AddressContainer>
    </CheckoutContainer>
  )
}
