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
 



async function Page() {

   // Fetch data
   const posts = await getPosts();
   const news = await getNews();
 
   // Limit the number of items to 4
   const limitedRecentPosts = posts.slice(0, 3);
   const limitedNewsPosts = news.slice(0, 3);
   const limitedNews = news.slice(0, 4);
 
   if (!Array.isArray(limitedNewsPosts) || limitedNewsPosts.length === 0) {
     return <p>No posts available</p>;
   }
 

  return (
    <div>
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
            {limitedRecentPosts.map((post: Post) => (
              <div key={post._id}>
                <RecentPostCard post={post} />
              </div>
            ))}
          </ErrorBoundary>
          <div className="col-span-1">
            <p className="sm:p-5 text-primary font-medium text-3xl">
              Recent News
            </p>
            <ErrorBoundary>
            {limitedNewsPosts.map((post: Post) => (
              <div key={post._id}>
                <RecentNewsCard article={post} />
              </div>
            ))}
          </ErrorBoundary>
          </div>
        </div>
        <div className="col-span-2">
          <ErrorBoundary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5  md:space-y-0">
              {limitedNews.map((post: any) => (
                <div key={post.slug}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </ErrorBoundary>
        </div>
      </div>
      </ErrorBoundary>
      <ErrorBoundary>
        <Newsletter />
      </ErrorBoundary>
    </div>
  )
}

export default Page;

