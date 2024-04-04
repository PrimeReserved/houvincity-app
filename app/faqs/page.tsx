import React from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import FooterHome from '@/components/Footer/FooterHome';
import Header from '@/components/Header/HeaderHome';
import Hero from '@/components/Hero/Hero';

function page() {
  return (
    <>
    <ErrorBoundary>
      <Header />
    </ErrorBoundary>

    <ErrorBoundary>
      <Hero
        image={`./images/faqs/faqs.png`}
        title="FAQs"
        />
    </ErrorBoundary>

    <ErrorBoundary>
      <FooterHome />
    </ErrorBoundary>
  </>
  )
}

export default page
