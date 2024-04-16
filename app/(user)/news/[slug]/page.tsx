// // app/(user)/blog/[slug]/page.tsx
import { groq } from "next-sanity";
import { SanityDocument } from "next-sanity";
import { News } from "../../../../typings"
import { NEWS_QUERY , AUTHOR_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/client";
import DetailedNews from "@/components/Blog/Cards/DetailedNews";
import Header from "@/components/Header/HeaderHome";
import FooterHome from "@/components/Footer/FooterHome";
import AuthorProfile from "@/components/Blog/Cards/AuthorProfile";
import RecentPostCard from "@/components/Blog/Cards/RecentPostCard";

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
  const query = NEWS_QUERY ;
  const article: News = await client.fetch(query, { slug });
  console.log('Fetched article:', article); 

  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-3 grid-cols-1 mt-[5rem] xl:mx-10 justify-center mx-5">
        <div className=" col-span-2">
          <DetailedNews article={article} />
        </div>
        <div className="col-span-1">
          {/* <AuthorProfile author={post.author}  /> */}
          <RecentPostCard  />
        </div>
        <div className="col-span-1"></div>
      </div>
      <FooterHome />
    </>
  );
};
