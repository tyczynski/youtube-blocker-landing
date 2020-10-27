import { MdLanguage, MdBlock } from 'react-icons/md'
import { BsArrowUpDown } from 'react-icons/bs'
import { ButtonPencil } from '@components/Button'
import { H1 } from '@components/headings'
import { Wrapper, SectionHeader, CardsGrid } from './Features.style'
import { Card } from './Card'

export const Features = () => (
  <Wrapper id="features">
    <SectionHeader>
      <H1 as="h2">New features that are coming soon</H1>
      <a href="mailto:przemyslaw@tyczynski.pl?subject=YouTube%20Blocker%20-%20Propose%20new%20feature">
        <ButtonPencil $theme="ghost" text="Propose new feature" />
      </a>
    </SectionHeader>

    <CardsGrid>
      <Card
        active
        title="Import and Export"
        description="Import lists of unwanted channels and export your list. Share them with your friends and the community."
        Icon={BsArrowUpDown}
      />

      <Card
        active
        title="Additional button for ultra fast channel blocking"
        description="Buttons appear on the video thumbnails, which click immediately adds the channel to the block list."
        Icon={MdBlock}
      />

      <Card
        title="Multilanguage"
        description="Translation of the add-on into many languages such as Polish, Spanish, French, Chinese etc."
        Icon={MdLanguage}
      />
    </CardsGrid>
  </Wrapper>
)
