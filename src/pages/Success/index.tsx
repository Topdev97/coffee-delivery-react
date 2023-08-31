import successImage from '@/assets/success-image.svg'

import {
  SuccessContainer,
  Title,
  Message,
  TitleContainer,
  OrderInfoContainer,
  ContentContainer,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <TitleContainer>
        <Title>Yay! Order confirmed</Title>
        <Message>Sit back and relax while we bring your coffee to you</Message>
      </TitleContainer>
      <ContentContainer>
        <OrderInfoContainer>lalala</OrderInfoContainer>
        <img src={successImage} alt="" />
      </ContentContainer>
    </SuccessContainer>
  )
}
