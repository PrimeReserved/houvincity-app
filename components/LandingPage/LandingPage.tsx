"use client";

import { useEffect, useMemo, useState, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties, setSearchPerformed, setSearchQuery } from "@/features/properties/propertiesSlice";
import { fetchBlogs } from "@/features/blogs/blogsSlice";
import { fetchReviews } from "@/features/reviews/reviewsSlice";
import { RootState, AppDispatch  } from "@/store";
import ErrorBoundary from "../ErrorBoundary";
import SearchLandingPageResult from "./SearchLandingPageResult";
import LiveTour from "../Blog/Cards/LiveTour";
import isEmptyArray from '@/utils/helper-functions/isEmptyArray';

// Lazy loading components
const Hero = lazy(() => import("./Hero"));
const AboutProperty = lazy(() => import("@/components/LandingPage/AboutProperty"));
const Newsletter = lazy(() => import("@/components/Newsletter/Newsletter"));
const DiscoverProperty = lazy(() => import("./DiscoverProperty"));
const LandingSection = lazy(() => import("./LandingSection"));
const PropertyGrid = lazy(() => import("./PropertyGrid"));
const ViewAllButton = lazy(() => import("./ViewAllButton"));
const BlogSection = lazy(() => import("./BlogSection"));
const TestimonialSection = lazy(() => import("./TestimonialSection"));

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { properties, searchPerformed, searchQuery, searchResults, loading, error } = useSelector((state: RootState) => state.properties);
  const { blogs } = useSelector((state: RootState) => state.blogs);
  const { reviews } = useSelector((state: RootState) => state.reviews);

  useEffect(() => {
    dispatch(fetchProperties());
    dispatch(fetchBlogs());
    dispatch(fetchReviews());

    // Updated state management for searchPerformed
    if (searchQuery) {
      dispatch(setSearchPerformed(true));
    } else {
      dispatch(setSearchPerformed(false));
    }
  }, [dispatch, searchQuery]);

  isEmptyArray({
    properties,
    loading,
    error
  })

  const limitedProperties = useMemo(() => properties.slice(0, 3), [properties]);
  const limitedPosts = useMemo(() => blogs.slice(0, 3), [blogs]);
  const limitedReviews = useMemo(() => reviews.slice(0, 4), [reviews]);


  return (
    <main>
      {searchPerformed && searchResults.length > 0 ? (
        <SearchLandingPageResult searchResults={searchResults} />
      ) : (
        <>
          <Suspense>
            <Hero />
          </Suspense>
          {/* Discover Property */}
          <ErrorBoundary>
            <Suspense>
              <DiscoverProperty properties={limitedProperties} />
            </Suspense>
          </ErrorBoundary>
          {/* Land */}
          <LandingSection>
            <ErrorBoundary>
              <Suspense>
                <PropertyGrid properties={properties} />
              </Suspense>
              <Suspense>
                <ViewAllButton href="/property" />
              </Suspense>
            </ErrorBoundary>
          </LandingSection>
          <Suspense>
            <AboutProperty />
          </Suspense>
          {/* Blog section */}
          <ErrorBoundary>
            <Suspense>
              <BlogSection posts={limitedPosts} />
            </Suspense>
          </ErrorBoundary>
          {/* LiveTour section */}
          <ErrorBoundary>
            <Suspense>
              <LiveTour />
            </Suspense>
          </ErrorBoundary>


          {/* Testimony section */}
          <ErrorBoundary>
            <Suspense>
              <TestimonialSection reviews={limitedReviews} />
            </Suspense>
          </ErrorBoundary>
          {/* Newsletter section */}
          <ErrorBoundary>
            <Suspense>
              <Newsletter />
            </Suspense>
          </ErrorBoundary>
        </>
      )}
    </main>
  );
};

// Wrap Home component with PropertyProvider
export default function HomeWrapper() {
  return (
      <Home />
  );
}