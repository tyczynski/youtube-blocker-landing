import { NextPage } from 'next'
import Head from 'next/head'
import {
  Navbar,
  Header,
  HowToUse,
  DarkMode,
  Features,
  Footer,
} from '@components/sections'

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>
        YouTube Blocker - Easy way to block channels that you don't want to see
      </title>
    </Head>
    <Navbar />
    <Header />
    <HowToUse />
    <DarkMode />
    <Features />
    <Footer />
  </>
)

export default HomePage
