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

const sections = {
  '#how-to-use': 'How to use',
  '#features': 'Features',
}

type Section = keyof typeof sections

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

  /**
   * Smooth scroll to section
   *
   * @param event click mouse event
   * @param hash section id
   */
  const scrollToSection = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    hash: Section
  ) => {
    event.preventDefault()
    const section = document.querySelector(hash)

    if (section) {
      const { top } = section.getBoundingClientRect()

      window.scroll({
        behavior: 'smooth',
        top: window.pageYOffset + top,
      })
    }
  }

  return (
    <NavBase $active={active}>
      <GlobalStyles />

      <Nav>
        <Container>
          <Logo loading="lazy" src="/icons/logo.svg" alt="YouTube Blocker" />

          <Menu>
            {Object.keys(sections).map((key) => (
              <li
                onClick={(event) => scrollToSection(event, key as Section)}
                key={key}
              >
                <MenuLink href={key}>{sections[key as Section]}</MenuLink>
              </li>
            ))}
          </Menu>
        </Container>
      </Nav>
    </NavBase>
  )
}
