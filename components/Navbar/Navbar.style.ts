import styled from 'styled-components'
import { Container as CoreContainer } from '@components/Container'

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  backdrop-filter: saturate(180%) blur(0.8rem);
  background-color: rgba(255, 255, 255, 0.75);
  margin: 0 0 9.6rem;
  z-index: 100;
`

export const Container = styled(CoreContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 3.2rem;
  padding-bottom: 3.2rem;
`

export const Logo = styled.img`
  display: block;
  width: 14.2rem;
  height: auto;
`
export const Menu = styled.ul`
  display: flex;
  align-items: center;

  /* Reset default styles */
  list-style: none;
  margin: 0;
  padding: 0;
`

export const MenuItem = styled.li`
  &:last-child {
    margin-left: 1.2rem;
  }
`
