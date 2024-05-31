import ErrorBoundary from '@/components/ErrorBoundary'
import FooterHome from '@/components/Footer/FooterHome'
import Founders from '@/components/About/Founders'
import Header from '@/components/Header/HeaderHome'
import Hero from '@/components/Hero/Hero'
import React from 'react'

function page() {
  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <ErrorBoundary>
      <Hero
        image={`./images/about/about-section.png`}
        title="About Us"
        description="HOUVIN CITY LIMITED: “Your Gateway to stress-free Real Estate Solutions"
        />
      </ErrorBoundary>

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
