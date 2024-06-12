// app/(user)/blog/[slug]/page.tsx

import { News, Post } from "@/typings"
import PostDetailedCard from "@/components/Blog/Cards/PostDetailedCard"
import RecentPostCard from "@/components/Blog/Cards/RecentPostCard"
import ErrorBoundary from "@/components/ErrorBoundary"
import { Suspense, lazy } from "react"
import Loading from "@/app/loading"
import { getNews, getArticle, getPosts } from "@/lib/action"
import SocialShare from "@/components/Blog/SocialShare"
import AuthorProfile from "@/components/Blog/Cards/AuthorProfile"
import FooterHome from "@/components/Footer/FooterHome"
import Header from "@/components/Header/HeaderHome"
import Link from "next/link"
import NewsDetailedCard from "@/components/Blog/Cards/NewsDetailedCard"

const NewsCardLazy = lazy(() => import("@/components/Blog/Cards/NewsCard"))

export const generateMetadata = async ({ params }: any) => {
  const { slug } = params
  const article = await getArticle(slug)

  if (!article) {
    return {
      title: "News article Not Found",
      description: "The News article you are looking for does not exist."
    }
  }

  return {
    title: article.title,
    description: article.description
  }
}

export default async function Page({ params }: any) {
  const { slug } = params
  const article = await getArticle(slug)
  const posts = await getPosts()
  const news = await getNews()

  const limitedRecentPosts = Array.isArray(posts) ? posts.slice(0, 3) : []
  const limitedArticles = Array.isArray(news) ? news.slice(0, 3) : []

  return (
    <>
      <Header />
      <div className="md:flex flex-row mt-[5rem] xl:mx-10 justify-center md:mx-5">
        <div className="basis-1/2">
          <Suspense fallback={<Loading />}>
            <NewsDetailedCard article={article} />
          </Suspense>
        </div>
        <div className="basis-1/1">
          <Suspense fallback={<Loading />}>
            <AuthorProfile author={article.author} publishedAt={article.publishedAt} />
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
      <div className="p-10">
        <h1 className="text-center text-4xl">More Like This</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:space-y-0">
          <ErrorBoundary>
            {limitedArticles.map((article: News) => (
              <div key={article?._id}>
                <Suspense fallback={<Loading />}>
                  <NewsCardLazy article={article} />
                </Suspense>
              </div>
            ))}
          </ErrorBoundary>
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/news">
            <button className="py-3 px-[3.5rem] font-bold border-[1px] border-primary rounded-md text-xs text-primary hover:bg-primary hover:outline hover:outline-primary hover:text-white">
              More News
            </button>
          </Link>
        </div>
      </div>
      <FooterHome />
    </>
  )
}