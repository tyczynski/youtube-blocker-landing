import { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '@components/Navbar'
import { Header } from '@components/Header'
import { DarkMode } from '@components/sections'
import { Features } from '@components/Features'
import { Footer } from '@components/Footer'

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>
        YouTube Blocker - Easy way to block channels that you don't want to see
      </title>
    </Head>
    <Navbar />
    <Header />
    <DarkMode />
    <Features />
    <Footer />
  </>
)

export default HomePage
