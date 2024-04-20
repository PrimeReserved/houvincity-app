
import ErrorBoundary from '@/components/ErrorBoundary';
import FooterHome from '@/components/Footer/FooterHome';
import Header from '@/components/Header/HeaderHome';
import Hero from '@/components/Hero/Hero';
import Service from '@/components/Services/Services'
import CustomerTestimony from '@/components/Services/CustomerTestimony';
import ServiceBox from '@/components/Services/ServiceBox';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Services | Houvinvity Real Estate Property Management',
  description: 'Real Estate Property Management'
}



function Page() {

  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero
          image={`./images/services/services.png`}
          title="Services"
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <Service />
      </ErrorBoundary>

      <ErrorBoundary>
        <CustomerTestimony />
      </ErrorBoundary>

      <ErrorBoundary>
        <ServiceBox />
      </ErrorBoundary>

      <ErrorBoundary>
        <FooterHome />
      </ErrorBoundary>
    </>
  )
}

export default Page
