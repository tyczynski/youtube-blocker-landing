import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%; // 1rem === 10px
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }
`
