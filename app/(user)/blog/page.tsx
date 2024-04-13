// import { useState } from 'react';
import BlogCard from '@/components/Blog/Cards/BlogCard';
import RecentPostCard from '@/components/Blog/Cards/RecentPostCard';
import ErrorBoundary from '@/components/ErrorBoundary';
import FooterHome from '@/components/Footer/FooterHome';
import Header from '@/components/Header/HeaderHome';
import Hero from '@/components/Hero/Hero';
import Newsletter from '@/components/Newsletter/Newsletter';


import NewsCard from '@/components/Blog/Cards/NewsCard';



function Page() {

  return (
    <div>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero
          title="Welcome to Our Blog"
          description="Stay updated with Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua."
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <div className='grid lg:grid-cols-3 grid-cols-1 mt-[5rem] xl:mx-10 justify-center mx-5'>
          <div className='col-span-1'>
            <ErrorBoundary>
            <RecentPostCard />
            </ErrorBoundary>
            <ErrorBoundary>
              <NewsCard  />
            </ErrorBoundary>
          </div>

          <div className='col-span-2'>
            <ErrorBoundary>
              <BlogCard  />
            </ErrorBoundary>
          </div>
        </div>
      
      </ErrorBoundary>
      <ErrorBoundary>
        <Newsletter />
      </ErrorBoundary>
      <ErrorBoundary>
        <FooterHome />
      </ErrorBoundary>
    </div>
  )
}

export default Page;
