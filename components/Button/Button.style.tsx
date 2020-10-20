import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components'
import { ButtonComponentProps, ButtonTheme } from './types'

const themes: {
  [key in ButtonTheme]: FlattenInterpolation<ThemeProps<ButtonComponentProps>>
} = {
  primary: css`
    border-color: ${(props) => props.theme.colors.red};
    background-color: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white};
  `,
  ghost: css`
    border-color: ${(props) => props.theme.colors.red};
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.red};

    &:hover {
      background-color: ${(props) => props.theme.colors.red};
      color: ${(props) => props.theme.colors.white};
    }
  `,
  invert: css`
    border-color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.red};

    &:hover {
      background-color: ${(props) => props.theme.colors.red};
      color: ${(props) => props.theme.colors.white};
    }
  `,
}

export const Component = styled.button<ButtonComponentProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  outline: none;
  border: 1px solid;
  border-radius: 100rem;
  padding: 1.35rem 2.45rem;
  font-size: 1.4rem;
  line-height: 1.6rem;
  cursor: pointer;
  contain: content;
  text-decoration: none;
  transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
  transition-property: background-color, color;
  ${(props) => themes[props.$theme || 'primary']}

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    border-radius: inherit;
    border: 2px solid ${(props) => props.theme.colors.red};
    transition: 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
    transition-property: opacity, width, height;
    z-index: -1;
  }

  &:hover {
    &::after {
      opacity: 1;
      width: calc(100% + 1.2rem);
      height: calc(100% + 1.2rem);
    }
  }

  ${(props) =>
    props.$icon &&
    css`
      padding-right: 1.65rem;
    `}

  &::focus,
  &:active {
    outline: none;
  }

  svg {
    font-size: 2rem;
    margin-left: 0.8rem;
  }
`
