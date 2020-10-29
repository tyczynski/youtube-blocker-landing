import styled from 'styled-components'
import { ContainerSlim } from '@components/Container'
import { H1 } from '@components/headings'

export const Wrapper = styled(ContainerSlim)`
  margin-bottom: 8rem;

  @media screen and (min-width: 992px) {
    margin-bottom: 12.8rem;
  }
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-gap: 2.4rem;
`

export const SectionHeader = styled.header`
  display: grid;
  grid-gap: 3.2rem;
  margin: 0 0 6rem;

  ${H1} {
    margin: 0 0 4rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: 60rem auto;
    justify-content: space-between;
    margin: 0 0 8rem;

    ${H1} {
      margin: 0;
    }
  }
`
