// // app/(user)/blog/[slug]/page.tsx
import { Post } from '@/typings'
import PostDetailedCard from "@/components/Blog/Cards/PostDetailedCard";
import AuthorProfile from "@/components/Blog/Cards/AuthorProfile";
import RecentPostCard from "@/components/Blog/Cards/RecentPostCard";
import ErrorBoundary from "@/components/ErrorBoundary";
import SocialShare from "@/components/Blog/SocialShare";
import { Suspense } from "react";
import { getPost, getPosts } from "@/lib/action";
import Loading from "@/app/loading";
import PostCard from "@/components/Blog/Cards/PostCard";
import FooterHome from '@/components/Footer/FooterHome';
import Header from '@/components/Header/HeaderHome';
import Link from 'next/link';

export const revalidate = 30;


export const generateMetadata = async ({ params }: any) => {

  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    content: post.description
  }
}

export default async function Page({ params} : any) {

  const { slug } = params;
  const post = await getPost(slug);
  const posts = await getPosts();

  const limitedRecentPosts = Array.isArray(posts) ? posts.slice(0, 3) : [];
  const limitedPosts = Array.isArray(posts) ? posts.slice(0, 3) : [];;

  return (
    <>
    <ErrorBoundary>
      <Header />
    </ErrorBoundary>
      <div className="md:flex flex-row mt-[8rem] xl:mx-10 justify-center md:mx-5">
        <div className="basis-1/2">
          <Suspense fallback={<Loading />}>
            <PostDetailedCard post={post} />
          </Suspense>
        </div>
        <div className="basis-1/1">
          <Suspense fallback={<Loading />}>
            <AuthorProfile
              author={post.author}
              publishedAt={post.publishedAt}
            />
          </Suspense>
          <ErrorBoundary>
            {limitedRecentPosts.map((post: Post) => (
              <div key={post._id}>
                <Suspense fallback={<Loading />}>
                  <RecentPostCard post={post} />
                </Suspense>
              </div>
            ))}
          </ErrorBoundary>
          <div className="lg:mx-12">
          <p className="text-primary font-medium mt-[2.6rem] text-3xl">Share</p>
            <div className="p-5 bg-white rounded-md mt-5 drop-shadow-md">
              <SocialShare />
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 mt-10">
        <h1 className="text-center text-4xl">More Like This</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5  md:space-y-0 mt-5">
        <ErrorBoundary>
            {limitedPosts.map((post: Post) => (
              <div key={post._id}>
                <Suspense fallback={<Loading />}>
                  <PostCard post={post} />
                </Suspense>
              </div>
            ))}
          </ErrorBoundary>
        </div>
        <div className="flex justify-center mt-10">
         <Link href='/blog'>
         <button className="py-3 px-[3.5rem] font-bold border-[1px] border-primary rounded-md text-xs text-primary hover:bg-primary hover:outline hover:outline-primary hover:text-white">
            More Blog
          </button>
         </Link>
        </div>
      </div>
      <ErrorBoundary>
        <FooterHome />
      </ErrorBoundary>
    </>
  );
};
