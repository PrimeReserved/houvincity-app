import ErrorBoundary from '@/components/ErrorBoundary'
import FooterHome from '@/components/Footer/FooterHome'
import Header from '@/components/Header/HeaderHome'
import Terms from '@/components/Privacy/Terms'
import React from 'react'

export default function Page() {
  return (
    <>
    <ErrorBoundary>
      <Header />
    </ErrorBoundary>
    <Terms />
    <ErrorBoundary>
      <FooterHome />
    </ErrorBoundary>
  </>
  )
}
