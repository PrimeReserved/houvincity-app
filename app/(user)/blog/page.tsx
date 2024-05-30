import RecentPostCard from "@/components/Blog/Cards/RecentPostCard";
import ErrorBoundary from "@/components/ErrorBoundary";
import Hero from "@/components/Hero/Hero";
import Newsletter from "@/components/Newsletter/Newsletter";
import PostCard from "@/components/Blog/Cards/PostCard";
import { getNews, getPosts } from "@/lib/action";
import { Post } from "@/typings";
import RecentNewsCard from "@/components/Blog/Cards/RecentNewsCard";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Header from "@/components/Header/HeaderHome";
import FooterHome from "@/components/Footer/FooterHome";
import Pagination from "@/components/Blog/Pagination"
import NumberCount from "@/components/NumberCount/NumberCount";

async function Page() {
  // Fetch data
  const posts = await getPosts();
  const news = await getNews();

  // Limit the number of items to 4
  const limitedRecentPosts = posts.slice(0, 3);
  const limitedNewsPosts = news.slice(0, 3);
  const limitedPosts = posts.slice(0, 4);

  if (!Array.isArray(limitedPosts) || limitedPosts.length === 0) {
    return <p>No posts available</p>;
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
            {limitedRecentPosts.map((post: Post) => (
              <div key={post._id}>
                <Suspense fallback={<Loading />}>
                  <RecentPostCard post={post} />
                </Suspense>
              </div>
            ))}
          </ErrorBoundary>
          <div className="col-span-1">
            <p className="sm:p-5 text-primary font-medium text-3xl">
              Recent News
            </p>
            <ErrorBoundary>
            {limitedNewsPosts.map((post: Post) => (
              <div key={post._id}>
                <Suspense fallback={<Loading />}>
                  <RecentNewsCard article={post} />
                </Suspense>
              </div>
            ))}
          </ErrorBoundary>
          </div>
        </div>
        <div className="col-span-2">
          <ErrorBoundary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5  md:space-y-0">
              {limitedPosts.map((post: Post) => (
                <div key={post._id}>
                  <Suspense fallback={<Loading />}>
                    <PostCard post={post} />
                  </Suspense>
                </div>
              ))}
            </div>
          </ErrorBoundary>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[5rem] text-center text-[#040A3B] text-xl gap-2">
        <Pagination />
      </div>
      {/* <NumberCount /> */}
      <ErrorBoundary>
        <Newsletter />
      </ErrorBoundary>
      <FooterHome />
    </div>
  );
}

export default Page;
