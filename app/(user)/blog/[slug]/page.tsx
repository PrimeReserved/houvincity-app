// // app/(user)/blog/[slug]/page.tsx
import { groq } from "next-sanity";
import { SanityDocument } from "next-sanity";
import { Post } from "../../../../typings"
import { POST_QUERY, AUTHOR_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/client";
import DetailedCard from "@/components/Blog/Cards/DetailedCard";
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
  const query = groq`*[_type == 'post']{
    slug
  }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);
  console.log(`Slug Routes: ${slugRoutes}`);
  return slugRoutes?.map((slug) => ({
    slug,
  }));
};

export default async function Page({ params: { slug } }: Readonly<Props>) {
  const query = POST_QUERY;
  const post: Post = await client.fetch(query, { slug });

  return (
    <>
      <Header />
      <div className="flex flex-row mt-[5rem] xl:mx-10 justify-center mx-5">
        <div className="basis-1/2">
          <DetailedCard post={post} />
        </div>
        <div className="col-span-1">
          <AuthorProfile author={post.author}  />
          <RecentPostCard  />
        </div>
        <div className="col-span-1"></div>
      </div>
      <FooterHome />
    </>
  );
};
