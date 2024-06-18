"use client"


import ErrorBoundary from "@/components/ErrorBoundary";
import PostList from '@/components/Blog/PostList';

export default function Page(){
  return (
    <ErrorBoundary>
      <PostList />
    </ErrorBoundary>
  )
}