import styled from 'styled-components'

const ContainerBase = styled.div`
  padding-left: 3.2rem;
  padding-right: 3.2rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 992px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export const Container = styled(ContainerBase)`
  max-width: 1200px;
`

export const ContainerSlim = styled(ContainerBase)`
  max-width: 1072px;
`
