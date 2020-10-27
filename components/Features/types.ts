import { IconType } from 'react-icons'

export interface CardProps {
  active?: boolean
  title: string
  description?: string
  Icon: IconType
}

export interface StyledProps {
  $active?: CardProps['active']
}
