import React from 'react'

function LayoutCollection({ children, title }: { children: React.ReactNode, title: string }) {
  return (

    <>
      <h2 className="text-5xl text-white font-bold">{title}</h2>
      <section className="py-6">
        {children}
      </section>

    </>
  )
}

export default LayoutCollection
