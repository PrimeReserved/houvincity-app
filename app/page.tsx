"use client"

import React from 'react';
import UnderConstruction from '@/components/UnderConstruction';
import ErrorBoundary from '@/components/ErrorBoundary';
import Error from '@/components/Error';
import Header from '@/components/Header/HeaderHome';
import FooterHome from '@/components/Footer/FooterHome';
import RecentPostCard from '@/components/Blog/Cards/RecentPostCard';
import BlogCard from '@/components/Blog/Cards/BlogCard';

const Home: React.FC = () => {

  return (
    <div>
      {/* <ErrorBoundary fallback={<Error />}> */}
        {/* <Header /> */}
        <RecentPostCard />
        <BlogCard />
        {/* <UnderConstruction />
        <FooterHome />
      </ErrorBoundary> */}
    </div>
  );
};

export default Home;
