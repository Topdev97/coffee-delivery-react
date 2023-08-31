import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme['base-subtitle']};
    background-color: ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }

  button {
    &:active {
      opacity: 90%;
    }
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  img, p, span {  
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`
