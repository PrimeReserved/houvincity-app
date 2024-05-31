import ErrorBoundary from '@/components/ErrorBoundary'
import FooterHome from '@/components/Footer/FooterHome'
import React from 'react'
import Contact from '@/components/Contact/Contact'
import Header from '@/components/Header/HeaderHome'

function page() {
  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Contact />
      </ErrorBoundary>
      <ErrorBoundary>
        <FooterHome />
      </ErrorBoundary>
    </>
  )
}

export default page
