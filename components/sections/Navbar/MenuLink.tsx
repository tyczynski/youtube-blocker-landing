import styled from 'styled-components'
import { Text } from '@components/Text'

const Link = styled(Text)`
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 1.6rem;

  > span {
    display: inherit;
    pointer-events: none;
    transition: 0.2s cubic-bezier(0.17, 0.84, 0.44, 1);
    transition-property: transform, opacity;

    &:last-child {
      position: absolute;
      left: 1.6rem;
      transform: translateY(150%);
      opacity: 0;
      font-weight: 700;
    }
  }

  &:hover {
    span {
      &:first-child {
        opacity: 0;
        transform: translateY(-150%);
      }

      &:last-child {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`
// IntrinsicAttributes
export const MenuLink: React.FC<React.AnchorHTMLAttributes<
  HTMLAnchorElement
>> = ({ children, ...props }) => (
  <Link {...props} as="a">
    <span>{children}</span>
    <span>{children}</span>
  </Link>
)
