import { Minus, Plus, Trash } from 'phosphor-react'

import {
  ConfirmButton,
  Divider,
  CardContainer,
  SummaryContainer,
  SummaryTextContainer,
  TotalTextContainer,
  CounterContainer,
  InfoContainer,
  DetailsContainer,
  ActionsContainer,
  RemoveButton,
  Price,
  MinusButton,
  PlusButton,
} from './styles'

import { CoffeesContext } from '@/context/CoffeesContext'
import { useContext } from 'react'
import { SelectedCoffee } from '@/reducers/reducer'

interface CardProps {
  coffee: SelectedCoffee
}

function Card({ coffee }: CardProps) {
  const { id, image, title, quantity, price } = coffee
  const { addCoffeeQuantity, subtractCoffeeQuantity, removeCoffeeFromCart } =
    useContext(CoffeesContext)

  function handleAddQuantity() {
    addCoffeeQuantity(id)
  }

  function handleSubtractQuantity() {
    subtractCoffeeQuantity(id)
  }

  function handleRemoveCoffeeFromCart() {
    removeCoffeeFromCart(id)
  }

  const isMinusButtonDisabled = quantity === 1
  const isPlusButtonDisabled = quantity === 9

  return (
    <>
      <CardContainer>
        <InfoContainer>
          <img src={image} alt="Coffee image" />
          <DetailsContainer>
            {title}
            <ActionsContainer>
              <CounterContainer>
                <MinusButton
                  type="button"
                  onClick={handleSubtractQuantity}
                  disabled={isMinusButtonDisabled}
                >
                  <Minus size={14} weight="bold" />
                </MinusButton>
                <span>{quantity}</span>
                <PlusButton
                  type="button"
                  onClick={handleAddQuantity}
                  disabled={isPlusButtonDisabled}
                >
                  <Plus size={14} weight="bold" />
                </PlusButton>
              </CounterContainer>
              <RemoveButton type="button" onClick={handleRemoveCoffeeFromCart}>
                <Trash size={16} />
                REMOVE
              </RemoveButton>
            </ActionsContainer>
          </DetailsContainer>
        </InfoContainer>
        <Price>${(quantity * Number(price)).toFixed(2)}</Price>
      </CardContainer>
      <Divider />
    </>
  )
}

function SummaryContent() {
  const { finalPrice } = useContext(CoffeesContext)

  return (
    <>
      <SummaryTextContainer>
        <span>Total items</span>
        <span>${finalPrice}</span>
      </SummaryTextContainer>

      <SummaryTextContainer>
        <span>Delivery fee</span>
        <span>Free</span>
      </SummaryTextContainer>

      <TotalTextContainer>
        <span>Total</span>
        <span>${finalPrice}</span>
      </TotalTextContainer>
    </>
  )
}

export function Summary() {
  const { coffees } = useContext(CoffeesContext)

  return (
    <SummaryContainer>
      {coffees.map((coffee) => {
        return <Card key={coffee.id} coffee={coffee} />
      })}
      <SummaryContent />
      <ConfirmButton>Confirm order</ConfirmButton>
    </SummaryContainer>
  )
}
