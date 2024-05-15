"use client"

import LandingPage from "@/components/LandingPage/LandingPage"
import ErrorBoundary from '@/components/ErrorBoundary';
import Error from '@/app/error';
import Header from '@/components/Header/HeaderHome';
import FooterHome from '@/components/Footer/FooterHome';
import PropertyProvider from "@/context/PropertyProvider";
import { useState, Suspense } from "react";
import Loading from "@/app/loading"
import Head from "next/head";
import resetError from "@/utils/helper-functions/resetError"

const Home: React.FC = () => {
  const [error, setError] = useState<Error | null>(null);

 

  return (
    <div className=''>
      <ErrorBoundary fallback={<Error error={error} reset={() => resetError(setError)} />}>
        <Head>
          <title>Houvincity</title>
          <meta property="og:image" content="<generated>" />
          <meta property="og:image:type" content="<generated>" />
          <meta property="og:image:width" content="<generated>" />
          <meta property="og:image:height" content="<generated>" />
          <meta property="og:image:alt" content="About Houvincity" />
          <meta name="twitter:image" content="<generated>" />
          <meta property="twitter:image:alt" content="About Houvincity" />
          <meta name="twitter:image:type" content="<generated>" />
          <meta name="twitter:image:width" content="<generated>" />
          <meta name="twitter:image:height" content="<generated>" />
        </Head>
        <Header />
        <Suspense fallback={<Loading />}>
        <PropertyProvider>
          <LandingPage />
        </PropertyProvider>
        </Suspense>
        <FooterHome />
      </ErrorBoundary>
    </div>
  );
};

export default Home;