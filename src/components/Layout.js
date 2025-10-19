import React from 'react'

function Layout({children, className}) {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 ${className}`}>
        {children}
    </div>
  )
}

export default Layout