import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  CartContainer,
  CartNotification,
  HeaderContainer,
  LocationContainer,
} from './styles'
import logo from '@/assets/logo.svg'

import { defaultTheme } from '@/styles/themes/default'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" color={defaultTheme.purple} />
          <span>Toronto, ON</span>
        </LocationContainer>
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
      </nav>
    </HeaderContainer>
  )
}
