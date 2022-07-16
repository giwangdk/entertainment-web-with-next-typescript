/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'

import { User } from '../interfaces'

type Props = {
  data: User
}

function ListItem({ data }: Props) {
  return (
    <Link href="/users/[id]" as={`/users/${data.id}`}>
      <a>
        {data.id}
        :
        {data.name}
      </a>
    </Link>
  )
}

export default ListItem
