"use client"

import {useState, useEffect, useCallback, Suspense  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import RecentPostCard from "@/components/Blog/Cards/RecentPostCard";
import ErrorBoundary from "@/components/ErrorBoundary";
import Hero from "@/components/Hero/Hero";
import Newsletter from "@/components/Newsletter/Newsletter";
import PostCard from "@/components/Blog/Cards/PostCard";
import { News, Post } from "@/typings";
import RecentNewsCard from "@/components/Blog/Cards/RecentNewsCard";
import Header from "@/components/Header/HeaderHome";
import FooterHome from "@/components/Footer/FooterHome";
import Pagination from "@/components/Blog/Pagination";
import { fetchBlogs } from '@/features/blogs/blogsSlice';
import { fetchNews } from '@/features/news/newsSlice';
import isEmptyArray from '@/utils/helper-functions/isEmptyArray';
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from 'notiflix/build/notiflix-report-aio';



const PostList: any = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { blogs, loading, error } = useSelector((state: RootState) => state.blogs);
  const { news } = useSelector((state: RootState) => state.news);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    dispatch(fetchBlogs());
    dispatch(fetchNews());
  }, [dispatch]);

  useEffect(() => {
    if (loading) {
      Loading.pulse();
    } else {
      Loading.remove();
    }
  }, [loading]);

  useEffect(() => {
    setTotalPages(Math.ceil(news.length / 4));
  }, [news]);

  const onPageChange = useCallback((page: any) => {
    setCurrentPage(page);
  }, []);

  isEmptyArray({
    blogs,
    news,
    currentPage,
    loading,
    error
  });
  const limitedPosts = blogs.slice((currentPage - 1) * 4, currentPage * 4);

  if (error) {
    return Report.warning('An Error Occured', error, 'close', {width: '360px',});
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
          {blogs.slice(0, 3).map((post: Post) => (
              <div key={post._id} className=''>
                <Suspense>
                  <RecentPostCard post={post} />
                </Suspense>
              </div>
            ))}
          </ErrorBoundary>
          <div className="col-span-1 mt-10">
            <p className="sm:p-5 text-primary font-medium text-3xl">
              Recent News
            </p>
            <ErrorBoundary>
            {news.slice(0, 3).map((post: any) => (
                <div key={post._id}>
                  <Suspense>
                    <RecentNewsCard article={post} />
                  </Suspense>
                </div>
              ))}
            </ErrorBoundary>
          </div>
        </div>
        <div className="col-span-2 mt-10 lg:mt-0">
          <ErrorBoundary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5  md:space-y-0">
              {limitedPosts.map((post: Post) => (
                <div key={post._id}>
                  <Suspense>
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
      <ErrorBoundary>
        <Newsletter />
      </ErrorBoundary>
      <FooterHome />
    </div>
  );
}

export default PostList;
