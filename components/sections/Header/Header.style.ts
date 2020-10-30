import styled from 'styled-components'
import { Text } from '@components/ui/Text'
import { Container } from '@components/skeleton/Container'

export const Content = styled.header`
  margin: 0 0 4.8rem;

  @media screen and (min-width: 768px) {
    grid-column: 1 / 8;
    margin: 0;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / 7;
  }

  &.is-initialized .is-translatable {
    transform: translateY(0) rotate(0);
    opacity: 1;
  }
`

export const Wrapper = styled(Container)`
  margin-bottom: 8rem;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0 3.2rem;
    align-items: center;
    margin-bottom: 11.2rem;
  }
`

export const Images = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    grid-column: 8 / 13;
  }

  picture {
    display: block;
    border-radius: 0.8rem;
    overflow: hidden;

    &:first-child {
      position: absolute;
      display: none;
      z-index: 10;
      top: 50%;
      transform: translateY(-50%);

      @media (min-width: 992px) {
        display: block;
      }
    }

    &:last-child {
      position: relative;
      z-index: 20;
      max-width: 32rem;
      margin: 0 auto;
      box-shadow: 0 0.7px 2.2px rgba(0, 0, 0, 0.02),
        0 1.6px 5.3px rgba(0, 0, 0, 0.028), 0 3px 10px rgba(0, 0, 0, 0.035),
        0 5.4px 17.9px rgba(0, 0, 0, 0.042), 0 10px 33.4px rgba(0, 0, 0, 0.05),
        0 24px 80px rgba(0, 0, 0, 0.07);

      @media (min-width: 992px) {
        margin-left: auto;
        margin-right: 0;
      }
    }
  }
`

export const BrowsersBlock = styled.div<{ delay: string }>`
  display: flex;
  align-items: center;
  transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-property: transform opacity;
  transition-delay: ${(props) => props.delay};
  transform: translateY(100%);
  opacity: 0;

  @media (max-width: 581px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const BrowsersText = styled(Text)`
  margin: 0 1.2rem 0 0;

  @media screen and (min-width: 576px) {
    margin: 0 1.2rem 0 2.4rem;
  }
`

export const BrowsersWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2.4rem 0 0;

  @media screen and (min-width: 576px) {
    margin: 0;
  }
`
