import styled, { css } from 'styled-components'

interface SignProps {
  $active: boolean
}

const ModifierWrapper = styled.div<SignProps>`
  width: 1.6rem;
  height: 1.6rem;
  border: 1px solid var(--red);
  border-radius: 2px;
  margin-right: 0.8rem;
  transition: background-color 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);

  svg {
    fill: var(--text-black);
    transition: fill 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  ${(props) =>
    props.$active &&
    css`
      background-color: var(--red);

      svg {
        fill: #fff;
      }
    `}
`

export const GModifierSign: React.FC<
  React.HTMLAttributes<HTMLDivElement> & SignProps
> = (props) => (
  <ModifierWrapper {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="M7.932 13.115c1.717 0 3.047-.84 3.047-2.527V4.085H9.734v1.061h-.093C9.415 4.741 8.963 4 7.744 4 6.164 4 5 5.249 5 7.332c0 2.088 1.189 3.2 2.736 3.2 1.201 0 1.666-.677 1.896-1.095h.09v1.07c.012 1.014-.81 1.538-1.79 1.538-1.023 0-1.5-.575-1.752-.89l-.933.682c.426.686 1.257 1.278 2.685 1.278zm.085-3.64c-1.138 0-1.73-.873-1.73-2.16 0-1.257.58-2.233 1.73-2.233 1.112 0 1.709.908 1.709 2.233 0 1.351-.61 2.16-1.709 2.16z"
        fillRule="nonzero"
      />
    </svg>
  </ModifierWrapper>
)

export const IModifierSign: React.FC<
  React.HTMLAttributes<HTMLDivElement> & SignProps
> = (props) => (
  <ModifierWrapper {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="M7.805 4.521c.435 0 .806-.336.806-.758S8.24 3 7.805 3C7.366 3 7 3.34 7 3.763c0 .422.366.758.805.758zm.631 7.522V5.497H7.162v6.546h1.274z"
        fillRule="nonzero"
      />
    </svg>
  </ModifierWrapper>
)
