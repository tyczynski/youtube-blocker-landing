import styled, { css } from 'styled-components'
import { OptionProps } from './types'

export const Container = styled.div<{ $active: OptionProps['isActive'] }>`
  display: flex;
  align-items: center;
  padding: 2.4rem 1.8rem;
  border-radius: 0.4rem;
  margin: 0 0 3.2rem;
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
  transition-property: background-color, box-shadow;

  ${(props) =>
    props.$active &&
    css`
      box-shadow: 4px 4px 16px rgba(101, 108, 118, 0.08);
      background-color: var(--white);

      svg {
        circle {
          stroke-dashoffset: 0 !important;
        }
      }
    `}
`

export const NumberWrapper = styled.div`
  position: relative;
  margin-right: 1.8rem;
  min-width: 3.8rem;
  min-height: 3.8rem;
  width: 3.8rem;
  height: 3.8rem;
  line-height: 3.5rem;
  background: none;
  border: 0.2rem solid var(--neutral-02);
  padding: 0;
  border-radius: 100%;
  color: hsl(214, 7%, 43%);
  text-align: center;
  box-sizing: border-box;

  svg {
    position: absolute;
    width: inherit;
    height: inherit;
    top: -0.2rem;
    left: -0.2rem;
    fill: none;
    stroke: var(--red);
    stroke-width: 0.2rem;
    transform: rotate(-90deg);

    circle {
      transition: stroke-dashoffset 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
    }
  }
`

export const TextWrapper = styled.div`
  p {
    &:first-child {
      font-weight: 500;
      margin: 0 0 0.4rem;
      color: var(--text-gray);
    }

    &:last-child {
      font-size: 1.2rem;
      line-height: 2rem;
      margin: 0;
      color: hsl(214, 7%, 43%);
    }
  }
`
