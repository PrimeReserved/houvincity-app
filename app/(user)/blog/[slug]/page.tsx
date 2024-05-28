// // app/(user)/blog/[slug]/page.tsx
import { Post } from "../../../../typings";
import PostDetailedCard from "@/components/Blog/Cards/PostDetailedCard";
import AuthorProfile from "@/components/Blog/Cards/AuthorProfile";
import RecentPostCard from "@/components/Blog/Cards/RecentPostCard";
import ErrorBoundary from "@/components/ErrorBoundary";
import SocialShare from "@/components/Blog/SocialShare";
import { Suspense } from "react";
import { getPost, getPosts } from "@/lib/action";
import Loading from "@/app/loading";
import PostCard from "@/components/Blog/Cards/PostCard";


interface Props {
  params: {
    slug: string;
  }
}

export const generateStaticParams = async () => {
  const slugs: Post[] = await getPosts();
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);

  return slugRoutes?.map((slug) => ({
    slug,
  }));
};

export default async function Page({ params: { slug } }: Readonly<Props>) {
  const post = await getPost(slug);
  const posts = await getPosts();

  const limitedRecentPosts = posts.slice(0, 3);
  const limitedPosts = posts.slice(0, 3);

  return (
    <>
      <div className="md:flex flex-row mt-[5rem] xl:mx-10 justify-center md:mx-5">
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
                <RecentPostCard post={post} />
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5  md:space-y-0">
        <ErrorBoundary>
            {limitedPosts.map((post: Post) => (
              <div key={post._id}>
                <PostCard post={post} />
              </div>
            ))}
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
};
