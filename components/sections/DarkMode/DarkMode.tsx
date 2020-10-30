import React from 'react'
import { ImageSet } from 'caravaggio-react'
import { Container } from '@components/skeleton/Container'
import { H1 } from '@components/ui/headings'
import { Wrapper, Content, Images } from './DarkMode.style'
import { getImageSets } from 'utils/getImageSets'

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
          <ImageSet src="/images/dark-mode-01.png" sets={getImageSets(1024)} />
          <ImageSet src="/images/dark-mode-02.png" sets={getImageSets(480)} />
        </Images>
      </Container>
    </Wrapper>
  )
}
