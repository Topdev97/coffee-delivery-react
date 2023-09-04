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
        <ZipCodeInput
          id="zipCode"
          type="text"
          name="zipCode"
          placeholder="Zip Code"
          required
        />
        <StreetInput
          id="street"
          type="text"
          name="street"
          placeholder="Street"
          required
        />
        <div>
          <NumberInput
            id="number"
            type="text"
            name="number"
            placeholder="Number"
            required
          />
          <AdditionalAddressDetailInput
            id="additionalInfo"
            type="text"
            name="additionalInfo"
            placeholder="Additional address information (optional)"
          />
        </div>
        <div>
          <TownInput
            id="town"
            type="text"
            name="town"
            placeholder="Town"
            required
          />
          <CityInput
            id="city"
            type="text"
            name="city"
            placeholder="City"
            required
          />
          <StateInput
            id="state"
            type="text"
            name="state"
            placeholder="State"
            maxLength={2}
            required
          />
        </div>
      </AddressFormContainer>
    </AddressContainer>
  )
}
