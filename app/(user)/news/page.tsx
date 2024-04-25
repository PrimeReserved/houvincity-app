import RecentPostCard from '@/components/Blog/Cards/RecentPostCard';
import ErrorBoundary from '@/components/ErrorBoundary';
import FooterHome from '@/components/Footer/FooterHome';
import Header from '@/components/Header/HeaderHome';
import Hero from '@/components/Hero/Hero';
import Newsletter from '@/components/Newsletter/Newsletter';
import Loading from './loading'

import NewsCard from '@/components/Blog/Cards/NewsCard';
import { Suspense } from 'react';

import { Metadata } from 'next'
import NewsPost from '@/components/Blog/Cards/NewsPost';
 
export const metadata: Metadata = {
  title: 'News | Houvinvity Real Estate Property Management',
  description: 'News on Real Estate Property Management'
}



function Page() {

  return (
    <div>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero
          title="News Update"
          description="Stay updated with Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua."
        />
      </ErrorBoundary>
      <ErrorBoundary>
        <div className='grid lg:grid-cols-3 grid-cols-1 mt-[5rem] xl:mx-10 justify-center mx-5'>
          <div className='col-span-1'>
            <Suspense fallback={<Loading />}>
              <RecentPostCard />
            </Suspense>
            <Suspense fallback={<Loading />}>
              <NewsCard  />
            </Suspense>
          </div>
          <div className='col-span-2'>
            <ErrorBoundary>
              <Suspense fallback={<Loading />}>
                <NewsPost  />
              </Suspense>
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

