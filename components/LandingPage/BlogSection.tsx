import { Post } from "@/typings";
import PostCard from "../Blog/Cards/PostCard";
import { ViewAllButton } from "./ViewAllButton";


interface BlogSectionProps {
    posts: Post[]
}

export const BlogSection = ({ posts }: Readonly<BlogSectionProps>) => {
    return (
      <div className="wrapper flex justify-center items-center mb-[5rem] px-10">
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-customSecondary text-4xl font-semibold">
            Stay Updated from Our Blog
          </h1>
          <p className="text-base text-customTextColor mt-3 mb-[3rem]">
            Gather Information From Our Blog and Stay Updated
          </p>
          <div className="mb-10 flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:space-y-0">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
          <ViewAllButton href={`/blog`} />
        </div>
      </div>
    );
  };