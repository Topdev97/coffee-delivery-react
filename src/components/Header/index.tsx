import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '@/assets/logo.svg'
import { defaultTheme } from '@/styles/themes/default'

import {
  CartContainer,
  CartNotification,
  HeaderContainer,
  LocationContainer,
} from './styles'
import { CoffeesContext } from '@/context/CoffeesContext'

export function Header() {
  const { totalNumberOfCoffees } = useContext(CoffeesContext)

  const isCartEmpty = totalNumberOfCoffees === 0

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="" />
      </NavLink>
      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" color={defaultTheme.purple} />
          <span>Toronto, ON</span>
        </LocationContainer>
        <NavLink to="/checkout" title="Checkout">
          <CartContainer>
            <ShoppingCart
              size={22}
              weight="fill"
              color={defaultTheme['yellow-dark']}
            />
            {!isCartEmpty && (
              <CartNotification>{totalNumberOfCoffees}</CartNotification>
            )}
          </CartContainer>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
