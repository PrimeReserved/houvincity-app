import ErrorBoundary from '@/components/ErrorBoundary'
import FooterHome from '@/components/Footer/FooterHome'
import React from 'react'
import Header from '@/components/Header/HeaderHome'
import PaymentInfo from '@/components/Payment/PaymentInfo'

function page() {
  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <ErrorBoundary>
        <PaymentInfo />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <FooterHome />
      </ErrorBoundary>
    </>
  )
}

export default page
