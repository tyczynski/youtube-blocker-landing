import { BsPencil } from 'react-icons/bs'
import { Button } from './Button'
import { ButtonProps } from './types'

export const ButtonPencil = ({
  text,
  $theme,
}: Pick<ButtonProps, 'text' | '$theme'>) => (
  <Button text={text} $theme={$theme} Icon={BsPencil} />
)
