import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --red: hsl(347, 100%, 50%);

    --neutral-00: hsl(0, 0%, 100%);
    --neutral-01: hsl(300, 5.9%, 96.7%);
    --neutral-02: hsl(0, 0%, 91.4%);
    --neutral-03: hsl(0, 0%, 84.7%);
    --neutral-04: hsl(213.8, 7.3%, 42.7%);
    --neutral-05: hsl(210, 7.1%, 22%);
    --neutral-06: hsl(0, 0%, 7.1%);
    --neutral-07: #f7f6f7;

    --color-text-white: hsl(0, 0%, 100%);
    --color-white: hsl(0, 0%, 100%);

    --text-black: hsl(0, 0%, 7%);
    --text-dark: hsl(0, 0%, 14%);
    --text-gray: hsl(210, 7%, 22%);

    --background-dark: hsl(0, 0%, 7%);
    --background-gray: hsl(300, 6%, 97%);
    --background-gray-dark: hsl(0, 0%, 95%);

    --gradient: linear-gradient(135deg, hsl(335, 100%, 50%) 0%, var(--state-red) 100%);
  }

  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  /**
   * 1. 1rem === 10px
   */
  html {
    font-size: 62.5%; /* 1 */
    user-select: none;
  }

  body {
    font-family: Inter, sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--text-black);
    margin: 0;

    ::selection {
      color: var(----neutral-00);
      background-color: var(--red);
    }

    a {
      text-decoration: none;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
`
