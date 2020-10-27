import { NextPage } from 'next'
import { Navbar } from '@components/Navbar'
import { Header } from '@components/Header'
import { Features } from '@components/Features'
import { Footer } from '@components/Footer'

const HomePage: NextPage = () => (
  <>
    <Navbar />
    <Header />
    <Features />
    <Footer />
  </>
)

export default HomePage
