import styled, { css } from 'styled-components'

const shared = css`
  line-height: 1.15;
`

export const H1 = styled.h1`
  font-size: 4rem;
  line-height: 5rem;
  font-weight: 700;
  letter-spacing: -1px;

  @media screen and (min-width: 576px) {
    font-size: 5rem;
    line-height: 6rem;
  }
`

export const H2 = styled.h2`
  ${shared}
  font-size: 3.2rem;
`

export const H3 = styled.h3`
  ${shared}
  font-size: 1.6rem;
  color: var(--neutral-05);
`

export const H4 = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--neutral-05);
`
