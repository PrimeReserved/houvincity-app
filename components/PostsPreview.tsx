// ./components/PostPreview.tsx

"use client";

import { POSTS_QUERY } from "@/sanity/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { Post } from "@/typings"

import PostCard from "@/components/Blog/Cards/PostCard";

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
    <PostCard post={data} />
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}