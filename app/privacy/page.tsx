import React from 'react';
import ErrorBoundary from '@/components/ErrorBoundary'
import FooterHome from '@/components/Footer/FooterHome'
import Header from '@/components/Header/HeaderHome'

function page() {
  return (
    <>
    <ErrorBoundary>
      <Header />
    </ErrorBoundary>

    <ErrorBoundary>
      <FooterHome />
    </ErrorBoundary>
  </>
  )
}

export default page
