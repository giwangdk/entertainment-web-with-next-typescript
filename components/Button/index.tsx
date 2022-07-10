import React from 'react'
import { ButtonSize, ButtonVariant } from './theme'


type Props = {
  children: React.ReactNode,
  type: 'button' | 'submit' | 'reset',
  variant: 'primary' | undefined,
  size: 'sm' | 'md' | 'lg' | undefined,
  className: string,
}
export default function Button(props) {
  const { children,
    type, variant,
    size, className, ...rest }: Props = props
  
  const classNames = ButtonVariant[variant] + "" + ButtonSize[size] + " " + className
  return (
    <button type={type} className={classNames}  {...rest}>{children}</button>
  )
}
