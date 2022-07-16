/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import { BsFillBookmarkFill, BsFillGridFill } from 'react-icons/bs'
import { MdLocalMovies } from 'react-icons/md'
import { RiMovie2Fill } from 'react-icons/ri'

interface IconProps {
    icon: React.ReactNode,
    href: string,
}

function Icon({ icon, href }:IconProps) {
  return (
    <Link href={href}>
      <a>{icon}</a>
    </Link>
  )
}

function ListNav() {
  const className = 'text-slate-400 hover:text-slate-100 mr-5 md:mr-10 lg:mb-8 lg:mr-0'
  const size = 25
  return (
    <div className="flex lg:flex-col">

      <Icon icon={<BsFillGridFill className={className} size={size} />} href="/" />
      <Icon icon={<MdLocalMovies className={className} size={size} />} href="/" />
      <Icon icon={<RiMovie2Fill className={className} size={size} />} href="/" />
      <Icon icon={<BsFillBookmarkFill className={className} size={size} />} href="/" />
    </div>
  )
}

export default ListNav
