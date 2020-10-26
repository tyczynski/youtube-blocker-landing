import { Component } from './Button.style'
import { ButtonProps } from './types'

export const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ text, $theme, Icon, ...props }) => (
  <Component {...props} $icon={!!Icon} $theme={$theme}>
    <span>{text}</span>
    {Icon && <Icon />}
  </Component>
)

Button.defaultProps = {
  color: 'primary',
}
