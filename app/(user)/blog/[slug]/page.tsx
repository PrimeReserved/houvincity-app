// // app/(user)/blog/[slug]/page.tsx
import { groq } from "next-sanity";
import { Post } from "../../../../typings"
import { POST_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/client";
import DetailedCard from "@/components/Blog/Cards/DetailedCard";
import Header from "@/components/Header/HeaderHome";
import FooterHome from "@/components/Footer/FooterHome";
import AuthorProfile from "@/components/Blog/Cards/AuthorProfile";
import RecentPostCard from "@/components/Blog/Cards/RecentPostCard";
import ErrorBoundary from "@/components/ErrorBoundary";
import BlogDetailPost from "@/components/Blog/Cards/BlogDetailPost";
import SocialLink from "@/components/Socials/SocialLink";

import Instagram from "@/public/images/socials/path1165.svg";
import Twitter from "@/public/images/socials/path1009.svg";
import Facebook from "@/public/images/socials/Vector.svg";
import Youtube from "@/public/images/socials/youtube.png";

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
        <div className="basis-1/1">
          <AuthorProfile author={post.author} publishedAt={post.publishedAt} />
          <RecentPostCard />
          <div className="flex">
            <SocialLink
              href="https://www.linkedin.com/company/primereserved"
              image={Instagram}
              alt="Instagram"
            />
            <SocialLink
              href="https://www.instagram.com/primereservedtech"
              image={Twitter}
              alt="Twitter"
            />
            <SocialLink
              href="https://www.facebook.com/groups/1554028415142497/"
              image={Facebook}
              alt="Facebook"
            />
            <SocialLink
              href="https://www.youtube.com/@primereservedtech"
              image={Youtube}
              alt="Youtube"
            />
          </div>
        </div>
      </div>
      <div className="p-10">
        <h1 className="text-center text-4xl">More Like This</h1>
        <ErrorBoundary>
          <BlogDetailPost />
        </ErrorBoundary>
      </div>
      <FooterHome />
    </>
  );
};
