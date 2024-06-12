"use client"

import { useState, useEffect, useCallback } from 'react';
import RecentPostCard from "@/components/Blog/Cards/RecentPostCard";
import ErrorBoundary from "@/components/ErrorBoundary";
import Hero from "@/components/Hero/Hero";
import Newsletter from "@/components/Newsletter/Newsletter";
import Loading from "@/app/loading";
import { getNews, getPosts } from "@/lib/action";
import { News, Post } from "@/typings";
import { Suspense } from "react";
import RecentNewsCard from "@/components/Blog/Cards/RecentNewsCard";
import FooterHome from "@/components/Footer/FooterHome";
import Header from "@/components/Header/HeaderHome";
import Link from "next/link";
import NewsCard from "@/components/Blog/Cards/NewsCard";
import Pagination from "@/components/Blog/Pagination";

function Page() {
  const [posts, setPosts] = useState([]);
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const postsData = await getPosts();
      const newsData = await getNews();
      setPosts(postsData);
      setNews(newsData);
      setTotalPages(Math.ceil(newsData.length / 4));
    }
    fetchData();
  }, []);

  const onPageChange = useCallback((page: any) => {
    setCurrentPage(page);
  }, []);

  const limitedNews = news.slice((currentPage - 1) * 4, currentPage * 4);

  if (!Array.isArray(limitedNews) || limitedNews.length === 0) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="rounded-lg border w-96 h-64 border-gray-200 bg-base-100 shadow-xl">
          <div>
            <p className="p-20 text-2xl text-gray-600 text-center">
              No News Article Available.{" "}
              <span className="text-primary">
                <Link href={`/`}>Go Home</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
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

      <div className="grid lg:grid-cols-3 grid-cols-1 mt-[5rem] xl:mx-10 justify-center mx-5">
        <div className="col-span-1">
          <p className="sm:p-5 text-primary font-medium text-3xl">
            Recent Posts
          </p>
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              {posts.slice(0, 3).map((post: Post) => (
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
                {news.slice(0, 3).map((news: News) => (
                  <div key={news._id}>
                    <RecentNewsCard article={news} />
                  </div>
                ))}
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
        <div className="col-span-2">
          <ErrorBoundary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:space-y-0">
              <Suspense fallback={<Loading />}>
                {limitedNews.map((article: News) => (
                  <div key={article?.title}>
                    <NewsCard article={article} />
                  </div>
                ))}
              </Suspense>
            </div>
          </ErrorBoundary>
        </div>
      </div>

      <div className="flex justify-center items-center mt-[5rem] text-center text-[#040A3B] text-xl gap-2">
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
      </div>
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