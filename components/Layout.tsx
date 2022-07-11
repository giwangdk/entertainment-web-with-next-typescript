import React from 'react'
import Sidebar from './Sidebar'

function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div>
          <Sidebar />
          <main className='flex flex-col py-6 px-4 mx-0 md:ml-6 md:pt-0  lg:ml-32 lg:min-w-[800px] lg:grow lg:mt-9'>
              {children}
          </main>
    </div>
  )
}

export default Layout