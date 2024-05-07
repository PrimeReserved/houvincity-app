// // app/(user)/blog/[slug]/page.tsx
import { groq } from "next-sanity";
import { News } from "../../../../typings"
import { client } from "@/sanity/client";
import DetailedNews from "@/components/Blog/Cards/DetailedNews";
import Header from "@/components/Header/HeaderHome";
import FooterHome from "@/components/Footer/FooterHome";
import AuthorProfile from "@/components/Blog/Cards/AuthorProfile";
import RecentPostCard from "@/components/Blog/Cards/RecentPostCard";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Suspense } from "react";
import NewsDetailPost from "@/components/Blog/Cards/NewsDetailPost";
import Loading from "@/app/loading";

interface Props {
  params: {
    slug: string;
  }
}

export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = groq`*[_type == 'news']{
    slug
  }`;
  const slugs: News[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);

  return slugRoutes?.map((slug) => ({
    slug,
  }));
};

export default async function Page({ params: { slug} }: Readonly<Props>){
  const query = groq`*[_type == 'news' && slug.current == $slug][0]{
    ...,
    body,
    author->{
      slug{
        current,
      },
      name,
      image{
        alt,
        asset{
          _ref,
        },
      },
    },
  }`;
  const article: News = await client.fetch(query, { slug });

  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-3 grid-cols-1 mt-[5rem] xl:mx-10 justify-center mx-5">
        <div className=" col-span-2">
          <Suspense fallback={<Loading />}>
            <DetailedNews article={article} />
          </Suspense>
        
        </div>
        <div className="col-span-1">
          <Suspense fallback={<Loading />}>
            <AuthorProfile author={article?.author} publishedAt={article.publishedAt} />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <RecentPostCard  />
          </Suspense>
        </div>
        <div className="col-span-1"></div>
      </div>
      <div className="p-10">
        <h1 className="text-center text-4xl">More Like This</h1>
        <ErrorBoundary>
        <Suspense fallback={<p>Loading...</p>}>
          <NewsDetailPost />
        </Suspense>
        </ErrorBoundary>
      </div>
      <FooterHome />
    </>
  );
};
