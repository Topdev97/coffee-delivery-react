import { MapPinLine } from 'phosphor-react'
import {
  AdditionalAddressDetailInput,
  AddressContainer,
  AddressFormContainer,
  AddressTitle,
  AddressTitleContainer,
  CityInput,
  NumberInput,
  StateInput,
  StreetInput,
  TownInput,
  ZipCodeInput,
} from './styles'
import { defaultTheme } from '@/styles/themes/default'

export function AddressForm() {
  return (
    <AddressContainer>
      <AddressTitleContainer>
        <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
        <AddressTitle>
          <p>Delivery address</p>
          <span>Tell us where you want your order to be delivered:</span>
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
  )
}
