import { styled } from 'styled-components'
import backgroundImage from '../../assets/background.svg'
import { defaultTheme } from '../../styles/themes/default'

export const HomeContainer = styled.div`
  display: flex;

  height: 34rem;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${backgroundImage});

  box-shadow:
    0px -30px 30px -20px ${defaultTheme.background} inset,
    0px 30px 30px -20px ${defaultTheme.background} inset;
`
