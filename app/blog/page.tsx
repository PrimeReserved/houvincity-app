"use client"
import axios from 'axios';
import useSWR from 'swr';
import BlogCard from '@/components/Blog/Cards/BlogCard';
import RecentPostCard from '@/components/Blog/Cards/RecentPostCard';
import Error from '@/components/Error';
import ErrorBoundary from '@/components/ErrorBoundary';
import FooterHome from '@/components/Footer/FooterHome';
import Header from '@/components/Header/HeaderHome';
import Hero from '@/components/Hero/Hero';
import Newsletter from '@/components/Newsletter/Newsletter';
import NumberCount from '@/components/NumberCount/NumberCount';
import React, { useEffect, useState } from 'react';
import BlogImage from "@/public/images/blog/Rectangle 23861.svg";
import RealEstate from "@/public/images/blog/Real estate.svg";
import Money from "@/public/images/blog/Money.svg";
import People from "@/public/images/blog/People.svg";
import IBlogCardData from '@/interfaces/IBlogCardData';


const ITEMS_PER_PAGE = 2;

interface PageData {
  articles: IBlogCardData[];
}

const fetcher = (url: string) => axios.get(url).then(res => res.data);

function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error } = useSWR<PageData>(`/api/blog`, fetcher);

  console.log(data)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (!data) return;

    const totalPages = Math.ceil(data?.articles?.length / ITEMS_PER_PAGE);
    setCurrentPage(Math.min(currentPage, totalPages));
  }, [currentPage, data]);

  if (!error && !data) {
    return <div className="w-full h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <Error error={error} />;
  }

  const paginatedArticles = data?.articles?.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE) || [];


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
            {paginatedArticles.map((article: IBlogCardData) => (
              <BlogCard 
              key={article.author} 
              blogCards={[article]} 
              urlToImage={article.urlToImage} 
              author={article.author} 
              content={article.content} 
              title={article.title} 
              description={article.description} 
              publishedAt={article.publishedAt} />
            ))}
          </div>
        </div>

        <ErrorBoundary>
          {data?.articles && ( // Render pagination only if data is available
            <NumberCount
              totalPages={Math.ceil(data.articles.length / ITEMS_PER_PAGE)} // Recalculate here
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </ErrorBoundary>


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

export default Page;
