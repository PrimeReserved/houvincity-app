"use client"

import { useState, useEffect, useCallback } from 'react';
import RecentPostCard from "@/components/Blog/Cards/RecentPostCard";
import ErrorBoundary from "@/components/ErrorBoundary";
import Hero from "@/components/Hero/Hero";
import Newsletter from "@/components/Newsletter/Newsletter";
import PostCard from "@/components/Blog/Cards/PostCard";
import { getNews, getPosts } from "@/lib/action";
import { Post } from "@/typings";
import RecentNewsCard from "@/components/Blog/Cards/RecentNewsCard";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Header from "@/components/Header/HeaderHome";
import FooterHome from "@/components/Footer/FooterHome";
import Pagination from "@/components/Blog/Pagination";
import Link from "next/link";

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
  const limitedPosts = posts.slice((currentPage - 1) * 4, currentPage * 4);

  if (!Array.isArray(limitedPosts) || limitedPosts.length === 0) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className=" rounded-lg border w-96 h-64 border-gray-200 bg-base-100 shadow-xl image-full">
          <div className="">
            <p className="p-20 text-2xl text-gray-600 text-center">
              No posts available.{" "}
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
          title="Welcome to Our Blog"
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
          {posts.slice(0, 3).map((post: Post) => (
              <div key={post._id}>
                <Suspense fallback={<Loading />}>
                  <RecentPostCard post={post} />
                </Suspense>
              </div>
            ))}
          </ErrorBoundary>
          <div className="col-span-1">
            <p className="sm:p-5 text-primary font-medium text-3xl">
              Recent News
            </p>
            <ErrorBoundary>
            {news.slice(0, 3).map((post: Post) => (
                <div key={post._id}>
                  <Suspense fallback={<Loading />}>
                    <RecentNewsCard article={post} />
                  </Suspense>
                </div>
              ))}
            </ErrorBoundary>
          </div>
        </div>
        <div className="col-span-2">
          <ErrorBoundary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5  md:space-y-0">
              {limitedPosts.map((post: Post) => (
                <div key={post._id}>
                  <Suspense fallback={<Loading />}>
                    <PostCard post={post} />
                  </Suspense>
                </div>
              ))}
            </div>
          </ErrorBoundary>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[5rem] text-center text-[#040A3B] text-xl gap-2">
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange}/>
      </div>
      {/* <NumberCount /> */}
      <ErrorBoundary>
        <Newsletter />
      </ErrorBoundary>
      <FooterHome />
    </div>
  );
}

export default Page;
