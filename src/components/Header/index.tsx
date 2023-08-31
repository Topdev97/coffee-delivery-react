import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  CartContainer,
  CartNotification,
  HeaderContainer,
  LocationContainer,
} from './styles'
import logo from '@/assets/logo.svg'

import { defaultTheme } from '@/styles/themes/default'
import { NavLink } from 'react-router-dom'

export function Header() {
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
            <CartNotification>
              <span>0</span>
            </CartNotification>
          </CartContainer>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}