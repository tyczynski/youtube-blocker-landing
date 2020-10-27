import styled, { css } from 'styled-components'
import { H3 } from '@components/headings'
import { Text } from '@components/Text'
import { StyledProps } from './types'

const activeIconContainerCSS = css`
  fill: var(--red);
`
export const IconContainer = styled.div<StyledProps>`
  font-size: 2.4rem;
  margin: 0 0 2.8rem;

  svg {
    fill: var(--neutral-03);
    ${(props) => props.$active && activeIconContainerCSS}
  }
`

export const Title = styled(H3)`
  margin: 0 0 0.8rem;
`

export const Description = styled(Text)`
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: var(--neutral-04);
`

export const ComingSoon = styled(Text)`
  font-size: 1.2rem;
  line-height: 2.4rem;
  font-weight: 300;
  color: var(--red);
  letter-spacing: 0.2rem;
  margin: 4rem 0 0;
`

const activeContainerCSS = css`
  padding: 6.4rem 4rem 3.2rem;
  color: var(--neutral-01);

  ${Title} {
    font-size: 2.4rem;
    color: var(--neutral-03);
  }

  ${Description} {
    color: var(--neutral-03);
  }
`

export const Container = styled.div<StyledProps>`
  padding: 6.4rem 4rem;
  background-color: var(--neutral-01);
  border-color: 0.1rem solid var(--neutral-01);
  border-radius: 0.4rem;
  ${(props) => !props.$active && activeContainerCSS}
`
