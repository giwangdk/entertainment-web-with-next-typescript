import React from 'react'
import { ButtonSize, ButtonVariant } from './theme'
import styles from './index.module.css'
import {AiFillPlayCircle} from 'react-icons/ai'


type Props = {
  children: React.ReactNode,
  type: 'button' | 'submit' | 'reset',
  variant: 'primary' | undefined,
  size: 'sm' | 'md' | 'lg' | undefined,
  className: string,
}
export const  Button = (props) => {
  const { children,
    type, variant,
    size, className, ...rest }: Props = props
  
  const classNames = ButtonVariant[variant] + "" + ButtonSize[size] + " " + className
  return (
    <button type={type} className={classNames}  {...rest}>{children}</button>
  )
}

export const PlayButton = (props) =>{
  const { className, show }: { className: string, show:boolean } = props
  const classNames = `pl-2 pr-5 py-2 rounded-full text-white font-bold flex items-center text-lg` + " " + className + " " + styles.play

    if (show) {
      return (<button className={classNames}><AiFillPlayCircle size={35} className="mr-2" />Play</button>)
    } else {
      return (
        <></>
      )
    }
}
