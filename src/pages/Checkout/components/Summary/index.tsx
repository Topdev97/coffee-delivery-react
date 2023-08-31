import { defaultTheme } from '@/styles/themes/default'
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
} from './styles'

import coffeeImage from '@/assets/coffees/americano.svg'

function Card() {
  return (
    <>
      <CardContainer>
        <InfoContainer>
          <img src={coffeeImage} alt="Coffee image" />
          <DetailsContainer>
            Traditional Espresso
            <ActionsContainer>
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
              <RemoveButton>
                <Trash size={16} color={defaultTheme.purple} />
                REMOVE
              </RemoveButton>
            </ActionsContainer>
          </DetailsContainer>
        </InfoContainer>
        <Price>$9.90</Price>
      </CardContainer>
      <Divider />
    </>
  )
}

function SummaryContent() {
  return (
    <>
      <SummaryTextContainer>
        <span>Total items</span>
        <span>$9.90</span>
      </SummaryTextContainer>

      <SummaryTextContainer>
        <span>Delivery fee</span>
        <span>Free</span>
      </SummaryTextContainer>

      <TotalTextContainer>
        <span>Total</span>
        <span>$9.90</span>
      </TotalTextContainer>
    </>
  )
}

export function Summary() {
  return (
    <SummaryContainer>
      <Card />
      <SummaryContent />
      <ConfirmButton>Confirm order</ConfirmButton>
    </SummaryContainer>
  )
}
