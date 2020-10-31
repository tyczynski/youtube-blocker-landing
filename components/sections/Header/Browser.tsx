import styled from 'styled-components'

interface BrowserProps {
  src: string
  alt: string
}

const Link = styled.a`
  display: inline-block;
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 1.2rem;
  opacity: 0.2;
  transition: opacity 0.3s ease;

  &:last-child {
    margin: 0;
  }

  &:hover {
    opacity: 1;
  }
`

export const Browser: React.FC<
  BrowserProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ src, alt, ...props }) => (
  <Link {...props} target="_blank" rel="noopener noreferrer">
    <img src={src} alt={alt} loading="lazy" />
  </Link>
)
