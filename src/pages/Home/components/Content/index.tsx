import { useContext, useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { Coffee } from '@/reducers/reducer'
import { coffees } from '@/utils/coffee-data'

import {
  Buy,
  CartButton,
  CoffeeContainer,
  CoffeesContainer,
  ContentContainer,
  CounterContainer,
  Description,
  MinusButton,
  PlusButton,
  PriceContainer,
  PriceNumber,
  Tag,
  TagsContainer,
  Title,
} from './styles'
import { defaultTheme } from '@/styles/themes/default'
import { CoffeesContext } from '@/context/CoffeesContext'

interface CoffeeCardProps {
  coffee: Coffee
}

function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useContext(CoffeesContext)

  function handleAddQuantity() {
    if (quantity === 9) return
    setQuantity((state) => state + 1)
  }

  function handleRemoveQuantity() {
    if (quantity === 1) return
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    addCoffeeToCart(coffee, quantity)
    setQuantity(1)
  }

  const isMinusButtonDisabled = quantity === 1
  const isPlusButtonDisabled = quantity === 9

  return (
    <CoffeeContainer>
      <img src={coffee.image} alt="Coffee image" />
      <TagsContainer>
        {coffee.tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>
        })}
      </TagsContainer>
      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>
      <Buy>
        <PriceContainer>
          $<PriceNumber>9.90</PriceNumber>
        </PriceContainer>
        <div>
          <CounterContainer>
            <MinusButton
              disabled={isMinusButtonDisabled}
              onClick={handleRemoveQuantity}
            >
              <Minus size={14} weight="bold" />
            </MinusButton>
            <span>{quantity}</span>
            <PlusButton
              disabled={isPlusButtonDisabled}
              onClick={handleAddQuantity}
            >
              <Plus size={14} weight="bold" />
            </PlusButton>
          </CounterContainer>
          <CartButton onClick={handleAddToCart}>
            <ShoppingCart
              size={22}
              weight="fill"
              color={defaultTheme['base-card']}
            />
          </CartButton>
        </div>
      </Buy>
    </CoffeeContainer>
  )
}

export function Content() {
  return (
    <ContentContainer>
      <p>Our coffees</p>
      <CoffeesContainer>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />
        })}
      </CoffeesContainer>
    </ContentContainer>
  )
}
