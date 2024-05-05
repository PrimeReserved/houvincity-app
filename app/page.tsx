"use client"

import LandingPage from "@/components/LandingPage/LandingPage"
import ErrorBoundary from '@/components/ErrorBoundary';
import Error from '@/components/Error';
import Header from '@/components/Header/HeaderHome';
import FooterHome from '@/components/Footer/FooterHome';
import PropertyProvider from "@/context/PropertyProvider";


const Home: React.FC = () => {


  return (
    <div className=''>
      <ErrorBoundary fallback={<Error />}>
        <Header />
        <PropertyProvider>
          <LandingPage />
        </PropertyProvider>
        <FooterHome />
      </ErrorBoundary>
    </div>
  );
};

export default Home;