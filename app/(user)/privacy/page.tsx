import React from 'react';
import ErrorBoundary from '@/components/ErrorBoundary'
import FooterHome from '@/components/Footer/FooterHome'
import Header from '@/components/Header/HeaderHome'
import Privacy from '@/components/Privacy/Privacy';

function page() {
  return (
    <>
    <ErrorBoundary>
      <Header />
    </ErrorBoundary>
    <Privacy />
    <ErrorBoundary>
      <FooterHome />
    </ErrorBoundary>
  </>
  )
}

export default page
