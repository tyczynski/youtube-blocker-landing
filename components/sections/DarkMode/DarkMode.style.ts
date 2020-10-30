import styled from 'styled-components'
import { H1 } from '@components/ui/headings'

export const Images = styled.div`
  position: relative;
  width: 100%;
  grid-column: 2 / 12;
  margin-bottom: -10px;

  picture {
    display: block;
    border-radius: 0.8rem;
    overflow: hidden;

    &:first-child {
      img {
        display: none;

        @media screen and (min-width: 768px) {
          display: block;
          position: relative;
          max-width: calc(100% - 5.4rem);
          z-index: 10;
        }

        @media screen and (min-width: 992px) {
          max-width: calc(100% - 15.2rem);
          margin-bottom: -16.8rem;
        }
      }
    }

    &:last-child {
      img {
        position: relative;
        max-width: 32rem;
        margin: 0 auto;

        @media screen and (min-width: 768px) {
          position: absolute;
          top: 0;
          right: 0;
          transform: translateY(-14%);
          z-index: 20;
          box-shadow: 0 0.7px 2.2px rgba(0, 0, 0, 0.02),
            0 1.6px 5.3px rgba(0, 0, 0, 0.028), 0 3px 10px rgba(0, 0, 0, 0.035),
            0 5.4px 17.9px rgba(0, 0, 0, 0.042),
            0 10px 33.4px rgba(0, 0, 0, 0.05), 0 24px 80px rgba(0, 0, 0, 0.07);
        }

        @media screen and (min-width: 992px) {
          transform: translate(0, -32%);
        }
      }
    }
  }
`

export const Content = styled.header`
  max-width: 64rem;
  margin: 0 0 4.8rem;

  @media (min-width: 576px) {
    margin: 0 0 9.6rem;
  }

  ${H1} {
    margin: 0;

    span {
      color: var(--text-dark);
    }

    &:first-child {
      margin: 0 0 4.8rem;

      @media (min-width: 576px) {
        margin: 0 0 6.4rem;
      }
    }
  }
`

export const Wrapper = styled.div`
  background-color: var(--background-dark);
  color: var(--neutral-00);
  padding: 10rem 0 0;
  overflow: hidden;
  contain: content;
  margin: 0 0 8rem;

  @media screen and (min-width: 578px) {
    padding: 12rem 0 0;
  }

  @media screen and (min-width: 992px) {
    padding: 16rem 0 0;
    margin: 0 0 12.8rem;
  }
`
