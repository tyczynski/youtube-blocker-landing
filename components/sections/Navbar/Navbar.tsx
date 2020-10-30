import { useEffect, useState } from 'react'
import { windowLoad } from '@lib/events'
import { MenuLink } from './MenuLink'
import {
  GlobalStyles,
  Menu,
  NavBase,
  Nav,
  Container,
  Logo,
} from './Navbar.style'

export const Navbar: React.FC = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.pageYOffset > 0)
    }

    window.addEventListener('scroll', handleScroll)
    windowLoad(handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <NavBase $active={active}>
      <GlobalStyles />

      <Nav>
        <Container>
          <Logo loading="lazy" src="/icons/logo.svg" alt="YouTube Blocker" />

          <Menu>
            <li>
              <MenuLink href="#how-to-use">How to use</MenuLink>
            </li>
            <li>
              <MenuLink href="#features">Features</MenuLink>
            </li>
          </Menu>
        </Container>
      </Nav>
    </NavBase>
  )
}
