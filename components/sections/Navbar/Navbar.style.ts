import styled, { createGlobalStyle, css } from 'styled-components'
import { Container as BaseContainer } from '@components/skeleton/Container'

export const GlobalStyles = createGlobalStyle`
  :root {
    --navbar-height: 8rem;

    @media screen and (min-width: 768px) {
      --navbar-height: 12rem;
    }
  }
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;

  /* Reset default styles */
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: var(--color-white);
  height: var(--navbar-height);
  transition: box-shadow 0.24s ease;
  transition-property: box-shadow, height;

  @supports (backdrop-filter: saturate(180%) blur(0.8rem)) {
    backdrop-filter: saturate(180%) blur(0.8rem);
    background-color: hsla(0, 0%, 100%, 0.95);
  }
`

export const Container = styled(BaseContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: height 0.24s ease;
  height: inherit;
`

export const Logo = styled.img`
  display: block;
  width: 14.2rem;
  height: auto;
`

export const NavBase = styled.div<{ $active: boolean }>`
  height: var(--navbar-height);
  margin: 0 0 4.8rem;

  @media screen and (min-width: 768px) {
    margin: 0 0 9.6rem;
  }

  ${(props) =>
    props.$active &&
    css`
      ${Nav} {
        --navbar-height: 8rem;
        box-shadow: 0 1.5px 3.6px rgba(0, 0, 0, 0.024),
          0 4.1px 10px rgba(0, 0, 0, 0.035), 0 9.9px 24.1px rgba(0, 0, 0, 0.046),
          0 33px 80px rgba(0, 0, 0, 0.07);
      }
    `}
`
