import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ThemeProvider } from 'styled-components'
import { theme } from '@style/theme'
import { GlobalStyles } from '@style/GlobalStyles'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default App
