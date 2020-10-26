import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ThemeProvider } from 'styled-components'
import { CaravaggioProvider } from 'caravaggio-react'
import { theme } from '@style/theme'
import { GlobalStyles } from '@style/GlobalStyles'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <CaravaggioProvider url="/api/assets">
        <Component {...pageProps} />
      </CaravaggioProvider>
    </ThemeProvider>
  </>
)

export default App
