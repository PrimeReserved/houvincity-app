import ErrorBoundary from '@/components/ErrorBoundary'
import FooterHome from '@/components/Footer/FooterHome'
import Founders from '@/components/About/Founders'
import React from 'react'

function page() {
  return (
    <>
      <ErrorBoundary>
        <Founders />
      </ErrorBoundary>
      <ErrorBoundary>
        <FooterHome />
      </ErrorBoundary>
    </>
  )
}

export default page
