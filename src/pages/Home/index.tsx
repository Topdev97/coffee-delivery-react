import { Intro } from './components/Intro'
import { Content } from './components/Content'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <Content />
    </HomeContainer>
  )
}
