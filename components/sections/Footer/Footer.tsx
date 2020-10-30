import { ContainerSlim } from '@components/skeleton/Container'
import { Wrapper, Info } from './Footer.style'

export const Footer = () => (
  <Wrapper>
    <ContainerSlim>
      <Info $size="small" $color="light">
        Crafted with ❤️ by{' '}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://tyczynski.dev"
        >
          Przemysław Tyczyński
        </a>{' '}
        &amp;{' '}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://kyosk.studio"
        >
          Kyosk Studio
        </a>
      </Info>
    </ContainerSlim>
  </Wrapper>
)
