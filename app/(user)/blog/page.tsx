import RecentPostCard from "@/components/Blog/Cards/RecentPostCard";
import ErrorBoundary from "@/components/ErrorBoundary";
import Hero from "@/components/Hero/Hero";
import Newsletter from "@/components/Newsletter/Newsletter";
import PostCard from "@/components/Blog/Cards/PostCard";
import { getNews, getPosts } from "@/lib/action";
import { Post } from "@/typings";

async function Page() {
  const posts = await getPosts();
  const news = await getNews();

  if (!Array.isArray(posts) || posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <div>
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
            {posts.map((post: Post) => (
              <div key={post._id}>
                <RecentPostCard post={post} />
              </div>
            ))}
          </ErrorBoundary>
          <ErrorBoundary>
            {posts.map((post: Post) => (
              <div key={post._id}>
                <RecentPostCard post={post} />
              </div>
            ))}
          </ErrorBoundary>
        </div>
        <div className="col-span-2">
          <ErrorBoundary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5  md:space-y-0">
              {posts.map((post: Post) => (
                <div key={post._id}>
                  <PostCard post={post} />
                </div>
              ))}
              {/* <BlogCard /> */}
            </div>
          </ErrorBoundary>
        </div>
      </div>

      <ErrorBoundary>
        <Newsletter />
      </ErrorBoundary>
    </div>
  );
}

export default Page;
