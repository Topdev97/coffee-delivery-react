import { styled } from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
  width: 40rem;
  padding: 2.5rem;
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

  font-size: 14px;
  color: ${(props) => props.theme['base-text']};

  transition: 100ms;

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme['yellow-dark']};
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
  width: 3.75rem;
`
