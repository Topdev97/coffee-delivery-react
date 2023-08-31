import { styled } from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
  /* width: 40rem; */
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

  @media (max-width: 768px) {
    span {
      font-size: 12px;
    }
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

  @media (max-width: 768px) {
    div {
      flex-wrap: wrap;
    }
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

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const ZipCodeInput = styled(BaseInput)`
  width: 12.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const StreetInput = styled(BaseInput)``

export const NumberInput = styled(BaseInput)`
  width: 12.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const AdditionalAddressDetailInput = styled(BaseInput)`
  flex-grow: 1;
`

export const TownInput = styled(BaseInput)`
  width: 12.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const CityInput = styled(BaseInput)`
  flex-grow: 1;
`

export const StateInput = styled(BaseInput)`
  width: 3.75rem;

  @media (max-width: 768px) {
    width: 4rem;
  }
`
