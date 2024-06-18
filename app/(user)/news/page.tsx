"use client"


import ErrorBoundary from "@/components/ErrorBoundary";
import NewsList from '@/components/Blog/NewsList';

export default function Page(){
  return (
    <ErrorBoundary>
      <NewsList />
    </ErrorBoundary>
  )
}