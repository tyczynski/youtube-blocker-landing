import { Button } from '@components/Button'
import { MenuLink } from './MenuLink'
import { Nav, Container, Logo, Menu, MenuItem } from './Navbar.style'

export const Navbar: React.FC = () => (
  <Nav>
    <Container>
      <Logo loading="lazy" src="/icons/logo.svg" alt="YouTube Blocker" />

      <Menu>
        <MenuItem>
          <MenuLink href="#how-to-use">How to use</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#features">Features</MenuLink>
        </MenuItem>
        <MenuItem>
          <Button $theme="ghost" text="Buy me a coffee" />
        </MenuItem>
      </Menu>
    </Container>
  </Nav>
)
