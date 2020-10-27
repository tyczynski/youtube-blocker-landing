import { NextPage } from 'next'
import { Navbar } from '@components/Navbar'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'

const HomePage: NextPage = () => (
  <>
    <Navbar />
    <Header />
    <Footer />
  </>
)

export default HomePage
