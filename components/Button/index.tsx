/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { ButtonSize, ButtonVariant } from './theme'
import styles from './index.module.css'

type Props = {
  children: React.ReactNode,
  type: 'button' | 'submit' | 'reset',
  variant: 'primary' | undefined,
  size: 'sm' | 'md' | 'lg' | undefined,
  className: string,
}
export function Button(props) {
  const {
    children,
    type, variant,
    size, className, ...rest
  }: Props = props

  const classNames = `${ButtonVariant[variant]}${ButtonSize[size]} ${className}`
  return (
    <button type={type} className={classNames} {...rest}>{children}</button>
  )
}

export function PlayButton(props) {
  const { className }: { className: string } = props
  const classNames = `pl-2 pr-5 py-1 rounded-full text-white font-bold flex items-center text-lg  ${className} ${styles.play}`
  return (
    <button className={classNames}>
      <AiFillPlayCircle size={35} className="mr-2" />
      Play
    </button>
  )
}
