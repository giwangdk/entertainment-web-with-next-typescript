import React from 'react'

function LayoutCollection({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <section className="">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default LayoutCollection
