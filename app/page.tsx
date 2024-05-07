"use client"

import LandingPage from "@/components/LandingPage/LandingPage"
import ErrorBoundary from '@/components/ErrorBoundary';
import Error from '@/app/error';
import Header from '@/components/Header/HeaderHome';
import FooterHome from '@/components/Footer/FooterHome';
import RecentPostCard from '@/components/Blog/Cards/RecentPostCard';
import BlogCard from '@/components/Blog/Cards/BlogCard';
import PropertyProvider from "@/context/PropertyProvider";
import { useState } from "react";


const Home: React.FC = () => {
  const [error, setError] = useState<Error | null>(null);

  // Reset function
  const resetFunction = () => {
    try {
      // Reset application state here
      setError(null);
      // reload the page
      window.location.reload();
    } catch (error) {
      console.error('Error occurred during reset:', error);
      // Log the error for further analysis
      // You can also notify the user about the error if needed
    }
  }

  return (
    <div className=''>
      <ErrorBoundary fallback={<Error error={error} reset={resetFunction} />}>
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