import { useEffect, useState } from 'react'
import Image from 'next/image'
import cx from 'classnames'
import { Button } from '@components/ui/Button'
import { windowLoad } from '@lib/events'
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

type AllowedBrowsers = 'chrome' | 'firefox'

const links: { [key in AllowedBrowsers]: string } = {
  firefox: 'https://addons.mozilla.org/pl/firefox/addon/youtube-blocker/',
  chrome:
    'https://chrome.google.com/webstore/detail/youtube-blocker/okgepglpkhgfhjonfceifgibiobjnodg',
}

export const Header: React.FC = () => {
  const [initialized, setInitialized] = useState(false)
  const [browser, setBrowser] = useState<AllowedBrowsers | null>(null)

  useEffect(() => {
    windowLoad(() => {
      setInitialized(true)
    })

    if (
      navigator.userAgent.indexOf('Chrome') != -1 ||
      navigator.userAgent.indexOf('Chromium') != -1 ||
      navigator.userAgent.indexOf('OPR') != -1 ||
      navigator.userAgent.indexOf('Opera') != -1 ||
      navigator.userAgent.indexOf('Edg') != -1
    ) {
      setBrowser('chrome')
    } else if (navigator.userAgent.indexOf('Firefox') != -1) {
      setBrowser('firefox')
    } else {
      setBrowser(null)
    }
  }, [])

  const QuickButton = (
    <Button
      disabled={browser === null}
      text="Get the extension"
      type="button"
      $theme="primary"
    />
  )

  return (
    <Wrapper>
      <Content className={cx({ 'is-initialized': initialized })}>
        <Title />

        <BrowsersBlock className="is-translatable" delay="0.75s">
          {browser === null ? (
            QuickButton
          ) : (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={browser !== null ? links[browser] : '#'}
            >
              {QuickButton}
            </a>
          )}

          <BrowsersWrapper>
            <BrowsersText>Avalible for:</BrowsersText>
            <Browser
              href={links.firefox}
              src="/icons/browser/mono/firefox.svg"
              alt="Mozilla Firefox"
            />
            <Browser
              href={links.chrome}
              src="/icons/browser/mono/chrome.svg"
              alt="Google Chrome"
            />
            <Browser
              href={links.chrome}
              src="/icons/browser/mono/edge.svg"
              alt="Microsoft Edge"
            />
            <Browser
              href={links.chrome}
              src="/icons/browser/mono/opera.svg"
              alt="Opera"
            />
          </BrowsersWrapper>
        </BrowsersBlock>
      </Content>
      <Images>
        <Image src="/images/intro-02.png" loading="lazy" unsized />
        <Image src="/images/intro-01.png" loading="lazy" unsized />
      </Images>
    </Wrapper>
  )
}
