import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  padding: 0 10rem;
`

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;

  gap: 2rem;

  border-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};
`
export const AddressTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const AddressTitle = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
  }
`
export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`

export const BaseInput = styled.input`
  display: flex;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};
  height: 2.625rem;

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const ZipCodeInput = styled(BaseInput)`
  width: 12.5rem;
`

export const StreetInput = styled(BaseInput)``

export const NumberInput = styled(BaseInput)``

export const AdditionalAddressDetailInput = styled(BaseInput)`
  flex-grow: 1;
`

export const TownInput = styled(BaseInput)``

export const CityInput = styled(BaseInput)`
  flex-grow: 1;
`

export const StateInput = styled(BaseInput)`
  width: 3.95rem;
`
