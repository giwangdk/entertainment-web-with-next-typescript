import React from 'react'
import Sidebar from './Sidebar'

function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div>
          <Sidebar />
          <main>
              {children}
          </main>
    </div>
  )
}

export default Layout