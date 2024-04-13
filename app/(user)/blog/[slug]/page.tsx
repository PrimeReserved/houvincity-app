// // app/(user)/blog/[slug]/page.tsx
import { SanityDocument } from "next-sanity";
import { POST_QUERY, AUTHOR_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/client";
import DetailedCard from "@/components/Blog/Cards/DetailedCard";
import Header from "@/components/Header/HeaderHome";
import FooterHome from "@/components/Footer/FooterHome";
import AuthorProfile from "@/components/Blog/Cards/AuthorProfile";
import RecentPostCard from "@/components/Blog/Cards/RecentPostCard";

interface DetailedCardProps {
  slug: string;
}


async function getPostData(slug: string) {
  const query = POST_QUERY(slug);

  const data = await client.fetch(query);
  console.log(data)
  return data;
}

export default async function Page({slug}: DetailedCardProps) {
  const post: SanityDocument = await getPostData(slug);
  console.log(`Post information: ${JSON.stringify(post)}`)
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-3 grid-cols-1 mt-[5rem] xl:mx-10 justify-center mx-5">
        <div className=" col-span-2">
          <DetailedCard slug={post?.slug} />
        </div>
        <div className="col-span-1">
          {/* <AuthorProfile slug={params.slug}  /> */}
          <RecentPostCard  />
        </div>
        <div className="col-span-1"></div>
      </div>
      <FooterHome />
    </>
  );
};
