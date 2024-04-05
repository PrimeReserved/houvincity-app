"use client"

import BlogCard from '@/components/Blog/Cards/BlogCard';
import RecentPostCard from '@/components/Blog/Cards/RecentPostCard';
import ComponentError from '@/components/Error';
import ErrorBoundary from '@/components/ErrorBoundary';
import FooterHome from '@/components/Footer/FooterHome';
import Header from '@/components/Header/HeaderHome';
import Hero from '@/components/Hero/Hero';
import Newsletter from '@/components/Newsletter/Newsletter';
import NumberCount from '@/components/NumberCount/NumberCount';
import React, { useEffect, useState } from 'react';
import IBlogCardData from '@/interfaces/IBlogCardData';

type PageData = {
  articles: IBlogCardData[] | undefined;
}

const ITEMS_PER_PAGE = 4;

const fetchPageData = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API}`, {
      method: 'GET',
    });

    console.log(`Response: ${response}`)
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const responseData: PageData = await response.json();
    return responseData.articles; // Return articles directly
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [data, setData] = useState<PageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const articles = await fetchPageData();
        console.log(articles)
        setData({ articles }); // Set articles to the data state variable
        const totalPages = Math.ceil((articles?.length ?? 0) / ITEMS_PER_PAGE);
        setTotalPages(totalPages);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return <div className="w-full h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <ComponentError />;
  }

  const paginatedArticles = data?.articles?.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE) || [];
  console.log(`Paginated Articles: ${paginatedArticles}`)

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
      <div className='grid lg:grid-cols-3 grid-cols-1 mt-[5rem] xl:mx-10 justify-center mx-5'>
        <div className=' col-span-1'>
          <RecentPostCard />
        </div>
        <div className=' col-span-2'>
          {paginatedArticles.map((article: IBlogCardData, index: number) => (
            <BlogCard
              key={index}
              blogCards={[article]} // Pass each article as an array to blogCards
              urlToImage={article.urlToImage} 
              author={article.author} 
              content={article.content} 
              title={article.title} 
              description={article.description} 
              publishedAt={article.publishedAt}
            />
          ))}
        </div>
      </div>
      {data?.articles && (
        <NumberCount
          totalPages={Math.ceil(data.articles.length / ITEMS_PER_PAGE)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}

      <ErrorBoundary>
        <Newsletter />
      </ErrorBoundary>
      <ErrorBoundary>
        <FooterHome />
      </ErrorBoundary>
    </div>
  );
}

export default Page;
