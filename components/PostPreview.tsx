// ./components/PostPreview.tsx

"use client";

import { POST_QUERY } from "@/sanity/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { QueryParams } from "next-sanity";
import { Post } from "@/typings"

import DetailedCard from "@/components/Blog/Cards/DetailedCard";

export default function PostPreview({
  initial,
  params
}: {
  initial: QueryResponseInitial<Post>;
  params: QueryParams
}) {
  const { data } = useQuery<Post | null>(
    POST_QUERY,
    params,
    { initial }
  );

  return data ? (
    <DetailedCard post={data} />
  ) : (
    <div className="bg-red-100">Post not found</div>
  );
}