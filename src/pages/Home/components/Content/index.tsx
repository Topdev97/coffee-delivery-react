import { Minus, Plus, ShoppingCart } from 'phosphor-react'
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
import { Coffee, coffees } from '@/utils/coffee-data'
import { useState } from 'react'

interface CoffeeCardProps {
  coffee: Coffee
}

function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  function handleAddQuantity() {
    if (quantity === 9) return
    setQuantity((state) => state + 1)
  }

  function handleRemoveQuantity() {
    if (quantity === 1) return
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    // TODO: Update context

    setQuantity(1)
  }

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
            <MinusButton onClick={handleRemoveQuantity}>
              <Minus size={14} weight="bold" color={defaultTheme.purple} />
            </MinusButton>
            <span>{quantity}</span>
            <PlusButton onClick={handleAddQuantity}>
              <Plus size={14} weight="bold" color={defaultTheme.purple} />
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
