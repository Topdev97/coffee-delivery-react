import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  Buy,
  CartContainer,
  CoffeeContainer,
  CoffeesContainer,
  ContentContainer,
  CounterContainer,
  Description,
  PriceContainer,
  PriceNumber,
  Tag,
  TagsContainer,
  Title,
} from './styles'
import { defaultTheme } from '@/styles/themes/default'
import { Coffee, coffees } from '@/utils/coffee-data'

interface CoffeeCardProps {
  coffee: Coffee
}

function CoffeeCard({ coffee }: CoffeeCardProps) {
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
            <Minus
              cursor="pointer"
              size={14}
              weight="bold"
              color={defaultTheme.purple}
            />
            <span>1</span>
            <Plus
              cursor="pointer"
              size={14}
              weight="bold"
              color={defaultTheme.purple}
            />
          </CounterContainer>
          <CartContainer>
            <ShoppingCart
              size={22}
              weight="fill"
              color={defaultTheme['base-card']}
            />
          </CartContainer>
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
