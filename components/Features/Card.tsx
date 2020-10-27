import React from 'react'
import {
  IconContainer,
  Title,
  Description,
  ComingSoon,
  Container,
} from './Card.style'
import { CardProps } from './types'

export const Card: React.FC<CardProps> = ({
  active,
  title,
  description,
  Icon,
}) => {
  return (
    <Container $active={active}>
      <IconContainer $active={active}>
        <Icon />
      </IconContainer>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {!active && <ComingSoon>COMING SOON</ComingSoon>}
    </Container>
  )
}

Card.defaultProps = {
  active: false,
}
