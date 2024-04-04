import BlogCard from '@/components/Blog/Cards/BlogCard'
import RecentPostCard from '@/components/Blog/Cards/RecentPostCard'
import Error from '@/components/Error'
import ErrorBoundary from '@/components/ErrorBoundary'
import FooterHome from '@/components/Footer/FooterHome'
import Header from '@/components/Header/HeaderHome'
import Hero from '@/components/Hero/Hero'
import Newsletter from '@/components/Newsletter/Newsletter'
import NumberCount from '@/components/NumberCount/NumberCount'
import React from 'react'

function page() {
  return (
    <div>
      <ErrorBoundary>
        <ErrorBoundary fallback={<Error />}>
          <Header />
        </ErrorBoundary>

        <ErrorBoundary fallback={<Error />}>
          <Hero
            title="Welcome to Our Blog"
            description="Stay updated with Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua."
          />
        </ErrorBoundary>
        {/* Blog body  */}
        <div className='grid lg:grid-cols-3 grid-cols-1 mt-[5rem] xl:mx-10 justify-center mx-5'>
          <div className=' col-span-1'>
            <RecentPostCard />
          </div>
          <div className=' col-span-2'>
            <BlogCard />
          </div>
        </div>

<NumberCount />


      <ErrorBoundary>
        <Newsletter />
      </ErrorBoundary>

      <ErrorBoundary>
        <FooterHome />
      </ErrorBoundary>

      </ErrorBoundary>
    </div>
  )
}

export default page
