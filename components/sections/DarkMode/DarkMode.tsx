import React from 'react'
import Image from 'next/image'
import { Container } from '@components/skeleton/Container'
import { H1 } from '@components/ui/headings'
import { Wrapper, Content, Images } from './DarkMode.style'

export const DarkMode: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <H1>Get rid off unwanted channels with style&nbsp;😎</H1>
          <H1>
            Yes, it comes in <span>Black</span>
          </H1>
        </Content>
        <Images>
          <Image
            src="/images/dark-mode-01.png"
            loading="lazy"
            width={1008}
            height={724}
          />

          <Image
            src="/images/dark-mode-02.png"
            loading="lazy"
            width={320}
            height={496}
          />
        </Images>
      </Container>
    </Wrapper>
  )
}
