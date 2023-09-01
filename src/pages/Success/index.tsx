import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import successImage from '@/assets/success-image.svg'
import { defaultTheme } from '@/styles/themes/default'

import {
  SuccessContainer,
  Title,
  Message,
  TitleContainer,
  GradientBorder,
  ContentContainer,
  OrderInfoContainer,
  OrderInfo,
  Info,
  MapPinContainer,
  TimerContainer,
  DollarSignContainer,
  InfoMessage,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <TitleContainer>
        <Title>Yay! Order confirmed</Title>
        <Message>Sit back and relax while we bring your coffee to you</Message>
      </TitleContainer>
      <ContentContainer>
        <OrderInfoContainer>
          <GradientBorder />
          <OrderInfo>
            <Info>
              <MapPinContainer>
                <MapPin
                  weight="fill"
                  size={16}
                  color={defaultTheme.background}
                />
              </MapPinContainer>
              <InfoMessage>
                <p>
                  Deliver to <span>street name</span>
                </p>
                <p>Town, city, state</p>
              </InfoMessage>
            </Info>
            <Info>
              <TimerContainer>
                <Timer
                  weight="fill"
                  size={16}
                  color={defaultTheme.background}
                />
              </TimerContainer>
              <InfoMessage>
                <p>Estimated delivery</p>
                <span>20 min - 30 min</span>
              </InfoMessage>
            </Info>
            <Info>
              <DollarSignContainer>
                <CurrencyDollar size={16} color={defaultTheme.background} />
              </DollarSignContainer>
              <InfoMessage>
                <p>Payment upon delivery</p>
                <span>Credit Card</span>
              </InfoMessage>
            </Info>
          </OrderInfo>
        </OrderInfoContainer>
        <img
          src={successImage}
          alt="Image of a delivery person on a motorcycle bringing your order to you"
        />
      </ContentContainer>
    </SuccessContainer>
  )
}
