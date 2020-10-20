import { IconType } from 'react-icons'

export type ButtonTheme = 'primary' | 'ghost' | 'invert'

export interface ButtonProps {
  text: string
  $theme?: ButtonTheme
  Icon?: IconType
}

export type ButtonComponentProps = Pick<ButtonProps, '$theme'> & {
  $icon: boolean
}
