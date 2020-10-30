import styled from 'styled-components'
import { H1 } from '@components/ui/headings'

const Container = styled(H1)`
  margin: 0 0 4rem;

  @media screen and (min-width: 576px) {
    margin: 0 0 4.8rem;
  }

  @media (min-width: 1020px) {
    margin: 0 0 5.6rem;
  }
`

const Text = styled.span`
  display: inline-block;
  overflow: hidden;

  .is-translatable {
    display: inherit;
    transform: translateY(100%) rotate(10deg);
    transform-origin: left bottom;
    transition: transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`

const Chunk: React.FC<{ $delay: string }> = ({ children, $delay }) => (
  <Text>
    <span className="is-translatable" style={{ transitionDelay: $delay }}>
      {children}
    </span>
  </Text>
)

export const Title = () => (
  <Container>
    <Chunk $delay="0s">Easy way</Chunk> <Chunk $delay="0.15s">to block</Chunk>
    <br />
    <Chunk $delay="0.30s">channels that</Chunk>{' '}
    <Chunk $delay="0.45s">you don't</Chunk>
    <br />
    <Chunk $delay="0.60s">want to see</Chunk>
  </Container>
)
