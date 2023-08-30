import { ShoppingCart } from 'phosphor-react'
import {
  IntroContainer,
  ItemsContainer,
  ItemIcon,
  TitleContainer,
  ItemContainer,
} from './styles'

import coffeeCup from '@/assets/intro-coffee-cup.svg'
import { defaultTheme } from '@/styles/themes/default'

function Title() {
  return (
    <TitleContainer>
      <p>Find the perfect coffee for any time of the day</p>
      <span>
        With Coffee Delivery, you get your coffee wherever you are, anytime
      </span>
    </TitleContainer>
  )
}

function Items() {
  return (
    <ItemsContainer>
      <div>
        <ItemContainer>
          <ItemIcon style={{ backgroundColor: defaultTheme['yellow-dark'] }}>
            <ShoppingCart
              size={16}
              weight="fill"
              color={defaultTheme.background}
            />
          </ItemIcon>
          Simple and secure purchase
        </ItemContainer>
        <ItemContainer>
          <ItemIcon style={{ backgroundColor: defaultTheme['base-text'] }}>
            <ShoppingCart
              size={16}
              weight="fill"
              color={defaultTheme.background}
            />
          </ItemIcon>
          Packaging keeps the coffee intact
        </ItemContainer>
      </div>
      <div>
        <ItemContainer>
          <ItemIcon style={{ backgroundColor: defaultTheme.yellow }}>
            <ShoppingCart
              size={16}
              weight="fill"
              color={defaultTheme.background}
            />
          </ItemIcon>
          Fast and trackeable delivery
        </ItemContainer>
        <ItemContainer>
          <ItemIcon style={{ backgroundColor: defaultTheme.purple }}>
            <ShoppingCart
              size={16}
              weight="fill"
              color={defaultTheme.background}
            />
          </ItemIcon>
          Coffee arrives fresh to you
        </ItemContainer>
      </div>
    </ItemsContainer>
  )
}

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <Title />
        <Items />
      </div>
      <img src={coffeeCup} alt="Image of a cup of coffee" />
    </IntroContainer>
  )
}
