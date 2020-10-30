import { Container, NumberWrapper, TextWrapper } from './Option.style'
import { OptionProps } from './types'

export const Option: React.FC<
  React.HTMLAttributes<HTMLDivElement> & OptionProps
> = ({ title, description, number, isActive, ...props }) => (
  <Container {...props} $active={isActive}>
    <NumberWrapper>
      {number}
      <svg>
        <circle
          cx="19"
          cy="19"
          r="17"
          style={{
            strokeDasharray: Math.PI * 2 * 17,
            strokeDashoffset: Math.PI * 2 * 17,
          }}
        ></circle>
      </svg>
    </NumberWrapper>
    <TextWrapper>
      <p>{title}</p>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </TextWrapper>
  </Container>
)
