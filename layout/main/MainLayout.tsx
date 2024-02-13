import React from 'react'
import { Header, Footer } from '@/shared'
import { Props } from '@/interface'

const MainLayout = ({children}: Props) => {
  return (
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default MainLayout