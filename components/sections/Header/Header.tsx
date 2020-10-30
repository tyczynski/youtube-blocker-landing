import { useEffect, useState } from 'react'
import cx from 'classnames'
import { ImageSet } from 'caravaggio-react'
import { Button } from '@components/ui/Button'
import { Browser } from './Browser'
import { Title } from './Title'
import {
  Content,
  Wrapper,
  Images,
  BrowsersBlock,
  BrowsersWrapper,
  BrowsersText,
} from './Header.style'
import { windowLoad } from 'utils/events'
import { getImageSets } from 'utils/getImageSets'

export const Header: React.FC = () => {
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    windowLoad(() => {
      setInitialized(true)
    })
  }, [])

  return (
    <Wrapper>
      <Content className={cx({ 'is-initialized': initialized })}>
        <Title />

        <BrowsersBlock className="is-translatable" delay="0.75s">
          <Button text="Get the extension" type="button" $theme="primary" />

          <BrowsersWrapper>
            <BrowsersText>Avalible for:</BrowsersText>
            <Browser
              href="https://addons.mozilla.org/pl/firefox/"
              src="/icons/browser/mono/firefox.svg"
              alt="Mozilla Firefox"
            />
            <Browser
              href="https://chrome.google.com/webstore/category/extensions?hl=en"
              src="/icons/browser/mono/chrome.svg"
              alt="Google Chrome"
            />
            <Browser
              href="https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home?hl=en-US"
              src="/icons/browser/mono/edge.svg"
              alt="Microsoft Edge"
            />
            <Browser
              href="https://addons.opera.com/pl/"
              src="/icons/browser/mono/opera.svg"
              alt="Opera"
            />
          </BrowsersWrapper>
        </BrowsersBlock>
      </Content>
      <Images>
        <ImageSet
          src="/images/intro-02.png"
          loading="lazy"
          sets={getImageSets(480)}
        />

        <ImageSet
          src="/images/intro-01.png"
          loading="lazy"
          sets={getImageSets(380)}
        />
      </Images>
    </Wrapper>
  )
}
