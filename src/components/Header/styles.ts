import { styled } from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;

  nav {
    display: flex;
    gap: 0.75rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`

const NavigationBase = styled.div`
  display: flex;
  align-items: center;

  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  span {
    text-transform: uppercase;
  }
`

export const LocationContainer = styled(NavigationBase)`
  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};
`

export const CartContainer = styled(NavigationBase)`
  position: relative;

  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};

  transition: 100ms;
`

export const CartNotification = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  right: -8px;
  top: -8px;

  width: 1.25rem;
  height: 1.25rem;

  border-radius: 50%;

  font-family: 'Baloo 2', cursive;
  font-size: 12px;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-dark']};
`
