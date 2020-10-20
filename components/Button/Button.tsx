import { Component } from './Button.style'
import { ButtonProps } from './types'

export const Button: React.FC<
  ButtonProps & React.HTMLProps<HTMLButtonElement>
> = ({ text, $theme, Icon }) => (
  <Component $icon={!!Icon} $theme={$theme}>
    <span>{text}</span>
    {Icon && <Icon />}
  </Component>
)

Button.defaultProps = {
  color: 'primary',
}
