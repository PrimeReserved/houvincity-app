// ./components/PostPreview.tsx

"use client";

import { POSTS_QUERY } from "@/sanity/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { Post } from "@/typings"

import BlogCard from "@/components/Blog/Cards/BlogCard";

export default function PostsPreview({
  initial,
}: {
  initial: QueryResponseInitial<Post>;
}) {
  const { data } = useQuery<Post | null>(
    POSTS_QUERY,
    {},
    { initial }
  );

  return data ? (
    <BlogCard />
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}