import React from 'react';
import LandingPage from "@/components/LandingPage/LandingPage"
import ErrorBoundary from '@/components/ErrorBoundary';
import Error from '@/components/Error';
import Header from '@/components/Header/HeaderHome';
import FooterHome from '@/components/Footer/FooterHome';


const Home: React.FC = () => {

  return (
    <div className=''>
      <ErrorBoundary fallback={<Error />}> 
        <Header />
        <LandingPage />
        <FooterHome />
      </ErrorBoundary>
    </div>
  );
};

export default Home;