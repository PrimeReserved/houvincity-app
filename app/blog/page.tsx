import BlogCard from '@/components/Blog/Cards/BlogCard'
import RecentPostCard from '@/components/Blog/Cards/RecentPostCard'
import Error from '@/components/Error'
import ErrorBoundary from '@/components/ErrorBoundary'
import FooterHome from '@/components/Footer/FooterHome'
import Header from '@/components/Header/HeaderHome'
import Hero from '@/components/Hero/Hero'
import Newsletter from '@/components/Newsletter/Newsletter'
import React from 'react'

function page() {
  return (
    <div>
      <ErrorBoundary>
        <ErrorBoundary fallback={<Error />}>
          <Header />
        </ErrorBoundary>

        <ErrorBoundary fallback={<Error />}>
          <Hero />
        </ErrorBoundary>
        {/* Blog body  */}
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="flex-1 p-20">
            <div className="mb-8">
              <h2 className="text-xl text-primary font-semibold mb-4">Recent Posts</h2>
              <ul>
                <RecentPostCard />
                <RecentPostCard />
                <RecentPostCard />
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Recent News</h2>
              <ul>
                <RecentPostCard />
                <RecentPostCard />
                <RecentPostCard />
              </ul>
            </div>
          </div>

          <div className="flex-1 p-20">
            {/*  BlogCard Components */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </div>

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
