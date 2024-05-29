import RecentPostCard from '@/components/Blog/Cards/RecentPostCard';
import ErrorBoundary from '@/components/ErrorBoundary';

import Hero from '@/components/Hero/Hero';
import Newsletter from '@/components/Newsletter/Newsletter';
import Loading from '@/app/loading'

import { Suspense } from 'react';
import { getNews, getPosts } from "@/lib/action";
import PostCard from "@/components/Blog/Cards/PostCard";
import { News, Post } from '@/typings';
import RecentNewsCard from '@/components/Blog/Cards/RecentNewsCard';
import FooterHome from '@/components/Footer/FooterHome';
import Header from '@/components/Header/HeaderHome';
import NumberCount from '@/components/NumberCount/NumberCount';
 



async function Page() {

   // Fetch data
   const posts = await getPosts();
   const news = await getNews();

   
 
   // Limit the number of data
   const limitedRecentPosts = Array.isArray(posts) ? posts.slice(0, 3) : [];
   const limitedNewsPosts = Array.isArray(news) ? news.slice(0, 3) : [];
   const limitedNews = Array.isArray(news) ? news.slice(0, 3) : [];
 
   if (!limitedNewsPosts || limitedNewsPosts.length === 0) {
     return <p>No posts available</p>;
   }
 

  return (
    <div>
      <Header />
      <ErrorBoundary>
        <Hero
          title="News Update"
          description="Stay updated with Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua."
        />
      </ErrorBoundary>
      <ErrorBoundary>
      <div className="grid lg:grid-cols-3 grid-cols-1 mt-[5rem] xl:mx-10 justify-center mx-5">
        <div className="col-span-1">
          <p className="sm:p-5 text-primary font-medium text-3xl">
            Recent Posts
          </p>
          <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            {limitedRecentPosts.map((post: Post) => (
              <div key={post._id}>
                <RecentPostCard post={post} />
              </div>
            ))}
            </Suspense>
          </ErrorBoundary>
          <div className="col-span-1">
            <p className="sm:p-5 text-primary font-medium text-3xl">
              Recent News
            </p>
            <ErrorBoundary>
            <Suspense fallback={<Loading />}>
            {limitedNewsPosts.map((post: News) => (
              <div key={post._id}>
                <RecentNewsCard article={post} />
              </div>
            ))}
            </Suspense>
          </ErrorBoundary>
          </div>
        </div>
        <div className="col-span-2">
          <ErrorBoundary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5  md:space-y-0">
            <Suspense fallback={<Loading />}>
              {limitedNews.map((post: any) => (
                <div key={post.slug}>
                  <PostCard post={post} />
                </div>
              ))}
              </Suspense>
            </div>
          </ErrorBoundary>
        </div>
      </div>
      </ErrorBoundary>
      <ErrorBoundary>
      <NumberCount />
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

