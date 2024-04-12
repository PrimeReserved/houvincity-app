// import { useState } from 'react';
import BlogCard from '@/components/Blog/Cards/BlogCard';
import RecentPostCard from '@/components/Blog/Cards/RecentPostCard';
import ComponentError from '@/components/Error';
import ErrorBoundary from '@/components/ErrorBoundary';
import FooterHome from '@/components/Footer/FooterHome';
import Header from '@/components/Header/HeaderHome';
import Hero from '@/components/Hero/Hero';
import Newsletter from '@/components/Newsletter/Newsletter';
import NumberCount from '@/components/NumberCount/NumberCount';


import NewsCard from '@/components/Blog/Cards/NewsCard';

import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import PostsPreview from "@/components/PostsPreview";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY, NEWS_QUERY } from "@/sanity/lib/queries";
import { QueryResponseInitial } from '@sanity/react-loader';


async function Page() {
  const initial: QueryResponseInitial<SanityDocument[]> = await loadQuery<SanityDocument[]>(POSTS_QUERY, {}, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });
  const newsInitialArray: QueryResponseInitial<SanityDocument[]> = await loadQuery<SanityDocument[]>(NEWS_QUERY, {}, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
});

// Type assertion to tell TypeScript that the first element is of type QueryResponseInitial<SanityDocument>
const newsInitial: QueryResponseInitial<SanityDocument> = newsInitialArray


// Assuming you want the first element of the array
  // Extract the data property from QueryResponseInitial
  const postData: SanityDocument[] | undefined = initial?.data;
  const newsData: SanityDocument | undefined = newsInitial?.data;

  if (!postData) return <ComponentError />;

  return draftMode().isEnabled ? (
    <PostsPreview initial={initial} />
  ) : (
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
            <RecentPostCard posts={postData.slice(0, 3)} />
            </ErrorBoundary>
            <ErrorBoundary>
              <NewsCard news={newsData.slice(0,3)} />
            </ErrorBoundary>
          </div>

          <div className='col-span-2'>
            <ErrorBoundary>
              <BlogCard posts={postData} />
            </ErrorBoundary>
          </div>
        </div>
        {/* {postData && (
    <NumberCount
      totalPages={Math.ceil(postData?.length / ITEMS_PER_PAGE)}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  )} */}
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
