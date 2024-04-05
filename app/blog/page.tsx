"use client"

import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
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



function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [data, setData] = useState<PageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Fetching posts...");
        const posts: SanityDocument[] = await client.fetch(BLOG_QUERY);
        console.log("Posts:", posts);
        if (!posts || posts.length === 0) {
          console.log("No posts found.");
          setError("No posts found.");
          return;
        }
        console.log("Posts fetched successfully.");
        const formattedArticles: IBlogCardData[] = posts.map((post) => ({
          title: post.title,
          slug: post.slug,
          author: post.author,
          mainImage: post.mainImage,
          body: post.body,
          publishedAt: post._createdAt,
          article:post
        }));
        setData({ articles: formattedArticles });
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

    return <div className="w-full h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <ComponentError />;
  }

  const articles  = data?.articles || [];
  console.log("articles:", articles);

  const paginatedArticles = articles.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
console.log(`Paginated Articles: ${paginatedArticles}`); // Log the actual paginated array

  console.log("Rendering page...");

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

      <ErrorBoundary>
        <div className='grid lg:grid-cols-3 grid-cols-1 mt-[5rem] xl:mx-10 justify-center mx-5'>
          <div className=' col-span-1'>
            <RecentPostCard />
          </div>

          <div className=' col-span-2'>
          {data?.articles?.map((article) => (
            <BlogCard key={article.slug.current} {...article} />
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
      </ErrorBoundary>
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
