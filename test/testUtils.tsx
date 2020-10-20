import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../style/theme'
import { GlobalStyles } from '../style/GlobalStyles'

const Providers: React.FC = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
)

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

export { customRender as render }
