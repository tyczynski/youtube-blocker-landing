import styled, { css } from 'styled-components'

interface TextProps {
  $size?: 'small' | 'normal'
  $color?: 'dark' | 'gray' | 'light'
}

const colors = {
  dark: '#34383C',
  gray: '#656C75',
  light: '#969aa1',
}

const sizes = {
  small: css`
    font-size: 1.2rem;
    line-height: 2rem;
  `,
  normal: css`
    font-size: 1.4rem;
    line-height: 2.4rem;
  `,
}

export const Text = styled.p<TextProps>`
  font-weight: 400;
  color: ${(props) => colors[props.$color || 'dark']};
  ${(props) => sizes[props.$size || 'normal']};

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease;

    &:hover {
      color: var(--red);
    }
  }
`

Text.defaultProps = {
  $size: 'normal',
  $color: 'dark',
}
