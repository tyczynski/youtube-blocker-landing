import styled, { css } from 'styled-components'
import { Container as BaseContainer } from '@components/skeleton/Container'

export const Background = styled.div`
  background-color: var(--background-gray);
  padding: 8rem 0;

  @media screen and (min-width: 576px) {
    padding: 12rem 0;
  }

  @media screen and (min-width: 992px) {
    padding: 16rem 0;
  }
`

export const Container = styled(BaseContainer)`
  display: grid;
  grid-gap: 4rem 3.2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto 32rem;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: auto 40rem;
  }
`

export const ExampleBlock = styled.div`
  background-color: var(--background-gray-dark);
  border-radius: 0.4rem;
  padding: 4rem 0;
  order: 1;

  @media screen and (min-width: 992px) {
    display: flex;
    order: unset;
  }

  > div {
    padding: 4rem 3rem;

    &:last-child {
      padding-top: 0;
    }

    @media screen and (min-width: 768px) {
      padding: 6rem;
    }

    @media screen and (min-width: 992px) {
      display: flex;
      flex-direction: column;
      flex: 50%;

      &:first-child {
        border-right: 0.1rem solid var(--neutral-03);
      }

      &:last-child {
        padding-top: 6rem;
      }
    }
  }
`

export const Results = styled.ul`
  width: max-content;
  list-style: none;
  padding: 0;
  margin: 0 auto;
`

export const Result = styled.li<{ $active: boolean }>`
  margin: 5px 0;

  button {
    font-size: 1.4rem;
    line-height: 1;
    padding: 0.9rem 1.2rem;
    border-radius: 0.4rem;
    color: var(--text-gray);
    background: none;
    border: 0;
    transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
    transition-property: color, background-color;

    @media (max-width: 849px) {
      margin: 0 auto;
      display: block;
    }
  }

  ${(props) =>
    props.$active &&
    css`
      button {
        background-color: var(--text-black);
        color: var(--color-text-white);
      }
    `}
`

export const Options = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Modifiers = styled.div`
  padding: 0 1.8rem;
`

export const Modifier = styled.button<{ $margin?: boolean }>`
  max-width: 150px;
  display: block;
  width: 100%;
  display: flex;
  align-items: center;
  background: none;
  border: 0;
  padding: 0;
  margin: 0 auto;
  cursor: pointer;
  color: var(--text-gray);

  ${(props) =>
    props.$margin &&
    css`
      margin-top: 1rem;
    `}
`

export const Title = styled.p<{ $highlight?: boolean }>`
  font-size: 1.2rem;
  line-height: 2.4rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 3.2rem;

  ${(props) =>
    props.$highlight &&
    css`
      color: var(--red);

      @media screen and (min-width: 992px) {
        margin: 0 0 5.8rem;
      }
    `}
`

export const Expressions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`

export const Expression = styled.p<{ $visible: boolean }>`
  margin: 0;
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);

  ${(props) =>
    props.$visible &&
    css`
      display: block;
      opacity: 1;
    `}

  &:first-child {
    position: absolute;
  }
`
